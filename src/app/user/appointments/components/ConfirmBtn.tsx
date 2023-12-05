'use client';

import VMarkSvg from '@/app/ui/globalComponents/VMarkSvg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  date: string;
};

const ConfirmBtn = ({ date }: Props) => {
  const router = useRouter();
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => {
        router.push(`?showDialog=y&secondDialog=y&date=${date}`);
      }}>
      <VMarkSvg className="text-green-600" />
    </Button>
  );
};

export default ConfirmBtn;
