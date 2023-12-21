'use client';
import { Role } from '@prisma/client';
import { Home } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HomeSvg = () => {
  //TODO: add functionality based on role
  const session = useSession();
  const pathName: string = usePathname();
  const pathSegment: string = pathName.split('/')[2];
  let urlToRedirect = `/user/${pathSegment}`;
  if (session.data?.user?.role === Role.ADMIN)
    urlToRedirect = `/admin/${pathSegment}`;
  return (
    <Link
      href={urlToRedirect}
      className={`inline-block absolute top-2 right-2`}>
      <Home />
    </Link>
  );
};

export default HomeSvg;
