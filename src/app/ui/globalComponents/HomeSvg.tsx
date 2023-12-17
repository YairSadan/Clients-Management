'use client';
import { Role } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HomeSvg = () => {
  //TODO: add functionality based on role
  const pathName: string = usePathname();
  const segments: string[] = pathName.split('/');
  const userId: string = segments[2];
  const session = useSession();
  let urlToRedirect = `/user/${userId}`;
  if (session.data?.user?.role === Role.ADMIN) {
    urlToRedirect = `/admin/${userId}`;
  }
  return (
    <Link
      href={`${urlToRedirect}`}
      className={`inline-block absolute top-2 right-2`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </Link>
  );
};

export default HomeSvg;
