import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (user?.email === 'yairsadan1@gmail.com') {
        // user.role = 'admin';
        console.log('adminnnnn');
        return true;
      } else if (user?.email === 'eliezerrules@gmail.com') {
        // check if its part of the db emails)
        console.log('not admin');
        return true;
      }
        return false;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          rendomKey: token.rendomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          rendomKey: u.rendomKey,
        };
      }
      return token;
    },
  },
};
