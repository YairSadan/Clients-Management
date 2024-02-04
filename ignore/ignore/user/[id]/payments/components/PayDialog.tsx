'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Icon } from '@radix-ui/react-select';
import React from 'react';

type Props = {
  btnContent: string;
  amountToPay: number;
  children: React.ReactNode;
  payClick: (shekels: number) => void;
};

const PayDialog = ({ btnContent, amountToPay, children, payClick }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader>
          <DialogTitle className="text-center">
            סכום לתשלום: {amountToPay}₪
          </DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="flex justify-center gap-5">
            <Button variant={'outline'} size={'icon'}>
              <Icon className="text-red-600" />
            </Button>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                payClick(amountToPay);
              }}>
              <CheckCircledIcon className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PayDialog;
