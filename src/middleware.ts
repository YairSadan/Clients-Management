import { Role } from '@prisma/client';
import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    if (
      req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token?.role !== Role.ADMIN
    )
      return NextResponse.redirect(new URL('/user', req.url));
    
    else if (
      req.nextUrl.pathname.startsWith('/user') &&
      req.nextauth.token?.role !== Role.CLIENT
    )
      return NextResponse.redirect(new URL('/admin', req.url));
    
    else if (req.nextUrl.pathname === '/' || !req.nextUrl.pathname.startsWith('/admin' || '/user' || '/login'))
      return NextResponse.redirect(new URL('/user', req.url));
  },
  {
    pages: {
      signIn: '/login',
    },
  }
);
