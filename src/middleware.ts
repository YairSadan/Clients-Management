import { Role } from '@prisma/client';
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    if (
      req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token?.role !== Role.ADMIN
    ) {
      return NextResponse.rewrite(new URL('/user', req.url));
    }
    if (
      req.nextUrl.pathname.startsWith('/user') &&
      req.nextauth.token?.role !== Role.CLIENT
    ) {
      return NextResponse.rewrite(new URL('/admin', req.url));
    }
  },
  {
    pages: {
      signIn: '/login',
    },
  }
);
