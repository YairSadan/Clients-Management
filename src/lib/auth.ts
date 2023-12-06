import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { GoogleProfile } from 'next-auth/providers/google';
import prisma from './prisma';
import { Role } from '@prisma/client';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          email: profile.email,
          image: profile.picture,
          name: profile.name,
          role: Role.CLIENT,
          phone: '',
          pricePerAppointment: 0,
          notes: '',
          fundingSource: '',
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false; //TODO: check for a better way to handle this
      const isFirstSignIn = await prisma.authrizedPool.findUnique({
        where: { email: user.email },
      });
      if (isFirstSignIn) {
        user.phone = isFirstSignIn.phone;
        user.pricePerAppointment = isFirstSignIn.pricePerAppointment;
        user.notes = isFirstSignIn.notes;
        user.fundingSource = isFirstSignIn.fundingSource;
        await prisma.authrizedPool.delete({ where: { email: user.email } });
        return true;
      } else if (
        !isFirstSignIn &&
        (await prisma.user
          .findUnique({ where: { email: user.email } })
          .then((s) => s?.email === user.email))
      )
        return true;
      //TODO: add a page to prompt the user to ask for access
      else return false;
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
};
