'use client';
import Button from '@/app/ui/globalComponents/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

const Options = () => {
  const router = useRouter();

  return (
    <>
      <Button text="לקבוע/לבטל תור" onClick={() => {}} />
      <Button
        text="לשלם"
        onClick={() => {
          router.push('/user/payments');
        }}
      />
      <Button text="לערוך פרטים אישיים" onClick={() => {}} />
    </>
  );
};

export default Options;
