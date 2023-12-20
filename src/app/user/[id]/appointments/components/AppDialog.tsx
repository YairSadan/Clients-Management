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
import { Appointment } from '@prisma/client';
import { useRouter } from 'next/navigation';

type Props = {
  btnContent: string;
  appDate: string;
  appointment: Appointment;
  children: React.ReactNode;
  confirmClick: (appointment: Appointment) => void;
};

const AppDialog = ({
  btnContent,
  appDate,
  appointment,
  children,
  confirmClick,
}: Props) => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader>
          <DialogTitle className="text-center">{appDate}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center gap-5">
          <DialogClose asChild>
            <Button variant={'outline'} size={'icon'}>
              <X className="text-red-600" />
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={async () => {
                await confirmClick(appointment);
                router.refresh();
              }}>
              <Check className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
