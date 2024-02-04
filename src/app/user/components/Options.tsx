'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Options = () => {
  const pathName = usePathname();
  return (
    <>
      <Button size={'lg'} asChild>
        <Link href={`${pathName}/appointments`}>לקבוע/לבטל תור</Link>
      </Button>
      <Button size={'lg'} asChild>
        <Link href={`${pathName}/payments`}>לשלם</Link>
      </Button>
      <Button size={'lg'} asChild>
        <Link href={`${pathName}/profile`}>פרופיל</Link>
      </Button>
    </>
  );
};

export default Options;
