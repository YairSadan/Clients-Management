'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Options = () => {
  const router = useRouter();

  return (
    <>
      <Button size={'optionButton'} asChild>
        <Link href="/user/appointments">לקבוע/לבטל תור</Link>
      </Button>
      <Button size={'optionButton'} asChild>
        <Link href="/user/payments">לשלם</Link>
      </Button>
      <Button size={'optionButton'} asChild>
        <Link href="/user/profile">פרופיל</Link>
      </Button>
    </>
  );
};

export default Options;
