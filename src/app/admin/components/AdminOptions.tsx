'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const AdminOptions = () => {
  return (
    <>
      <Button size={'optionButton'} asChild>
        <Link href={'admin/clients'}>לקוחות</Link>
      </Button>
      <Button size={'optionButton'} onClick={() => {}}>
        לוח זמנים
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
