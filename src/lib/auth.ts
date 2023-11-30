import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { GoogleProfile } from 'next-auth/providers/google';
import prisma from './prisma';

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
          role: 'user',
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false; //TODO: check for a better way to handle this
      if (await prisma.user.findUnique({ where: { id: user.id } }) || await prisma.emailsPoos.findUnique({ where: {email: user.email}})) { // TODO: check if this is a good practice cause it might be a security issue
        return true;
      }
      //TODO: add a page to prompt the user to ask for access
      return false;
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
