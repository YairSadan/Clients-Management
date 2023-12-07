'use client';

import XMarkSvg from '@/app/ui/globalComponents/XMarkSvg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  date: string;
};

const CancelBtn = ({ date }: Props) => {
  const router = useRouter();
  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => {
        router.push(`?showDialog=y&date=${date}`);
      }}>
      <XMarkSvg className="text-red-600" />
    </Button>
  );
};

export default CancelBtn;
