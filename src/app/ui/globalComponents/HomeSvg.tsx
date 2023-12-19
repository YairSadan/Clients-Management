'use client';
import { Role } from '@prisma/client';
import { Home } from 'lucide-react';
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
      <Home />
    </Link>
  );
};

export default HomeSvg;
