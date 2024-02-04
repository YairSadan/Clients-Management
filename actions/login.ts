'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken, genrateTwoFactorToken } from '@/lib/tokens';
import { sendVerificationEmail, sendTwoFactorEmail } from '@/lib/mail';
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token';
import { db } from '@/lib/db';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';

export const login = async (values: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'שדות לא חוקיים' };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'כתובת מייל זו לא קיימת במערכת' };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);

    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: 'נשלח מייל אימות!' };
  }
  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!twoFactorToken) {
        return { error: 'קוד אימות שני לא נכון' };
      }

      if (twoFactorToken.token !== code) {
        return { error: 'קוד אימות שני לא נכון' };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        return { error: 'קוד אימות שני פג תוקף' };
      }

      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await genrateTwoFactorToken(existingUser.email);
      await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token);
      return { twoFactor: true };
    }
  }
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'פרטים לא נכונים' };
        default:
          return { error: 'משהו השתבש' };
      }
    }

    throw error;
  }
};
