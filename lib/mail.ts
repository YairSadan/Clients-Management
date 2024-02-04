import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'קוד אימות שני',
    html: `<p>קוד אימות שני שלך הוא: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'איפוס סיסמה',
    html: `<p>לחץ <a href="${resetLink}">כאן</a> על מנת לאפס את הסיסמה שלך</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    //TODO: decide a fake mail address
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'אמת את המייל שלך',
    html: `<p>לחץ <a href="${confirmLink}">כאן</a> על מנת לאמת את כתובת המייל</p>`,
  });
};
