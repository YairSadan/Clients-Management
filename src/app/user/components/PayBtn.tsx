'use client';
import Button from '@/app/ui/globalComponents/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

const PayBtn = () => {
  const router = useRouter();

  return (
    <Button
      text="למעבר לתשלום"
      onClick={() => {
        router.push('?showDialog=y');
      }}
    />
  );
};

export default PayBtn;
