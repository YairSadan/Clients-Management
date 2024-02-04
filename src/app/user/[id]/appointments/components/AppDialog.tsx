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
import { Appointment } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Icon } from '@radix-ui/react-select';

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
        <DialogFooter>
          <DialogClose className="flex justify-center gap-5">
            <Button variant={'outline'} size={'icon'}>
              <Icon className="text-red-600" />
            </Button>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                confirmClick(appointment);
                router.refresh();
              }}>
              <CheckCircledIcon className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
