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
import React from 'react';
import { Check, X } from 'lucide-react';

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
        <DialogFooter className="flex-row justify-center gap-5">
          <DialogClose asChild>
            <Button variant={'outline'} size={'icon'}>
              <X className="text-red-600" />
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                payClick(amountToPay);
              }}>
              <Check className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PayDialog;
