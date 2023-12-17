'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AdminOptions = () => {
  const pathName = usePathname();
  return (
    <>
      <Button size={'optionButton'} asChild>
        <Link href={`${pathName}/clients`}>לקוחות</Link>
      </Button>
      <Button size={'optionButton'} asChild>
        <Link href={`${pathName}/schedule`}>לוח זמנים</Link>
      </Button>
      <Button size={'optionButton'} onClick={() => {}}>
        תשלומים
      </Button>
      <Button size={'optionButton'} onClick={() => {}}>
        הודעות
      </Button>
    </>
  );
};

export default AdminOptions;
