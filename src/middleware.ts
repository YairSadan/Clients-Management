import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    console.log(req.nextUrl.pathname);
        console.log(req.nextauth.token);
        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'admin') {
            return NextResponse.rewrite(new URL('/user', req.url))
        }
        if (req.nextUrl.pathname.startsWith('/user') && req.nextauth.token?.role !== 'user') {
            return NextResponse.rewrite(new URL('/admin', req.url))
        }
    },
    {
        pages: {
            signIn: '/login',
        },
    }
);
