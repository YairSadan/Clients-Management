'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Options = () => {
  const router = useRouter();

  return (
    <>
      <Button size={'optionButton'} onClick={() => {}}>לקבוע/לבטל תור</Button>
      <Button size={'optionButton'}
        onClick={() => {
          router.push('/user/payments');
        }}
      >לשלם</Button>
      <Button size={'optionButton'} onClick={() => {}}>לערוך פרטים אישיים</Button>
    </>
  );
};

export default Options;
