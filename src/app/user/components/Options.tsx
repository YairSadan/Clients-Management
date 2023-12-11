'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Options = () => {
  return (
    <>
      <Button size={'optionButton'} asChild>
        <Link href={'/user/appointments'}>לקבוע/לבטל תור</Link>
      </Button>
      <Button size={'optionButton'} asChild>
        <Link href={'/user/payments'}>לשלם</Link>
      </Button>
      <Button size={'optionButton'} asChild>
        <Link href={'/user/profile'}>לערוך פרטים אישיים</Link>
      </Button>
    </>
  );
};

export default Options;
