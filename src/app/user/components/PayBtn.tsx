'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const PayBtn = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push('?showDialog=y');
      }}
    >לתשלום</Button>
  );
};

export default PayBtn;
