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
import VMarkSvg from '@/app/ui/globalComponents/VMarkSvg';

type Props = {
  btnContent: string;
  appDate: string;
  children: React.ReactNode;
  okClick: (date: string) => void;
};

const AppDialog = ({ btnContent, appDate, children, okClick }: Props) => {
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
          <DialogClose>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                okClick(appDate);
              }}>
              <VMarkSvg className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppDialog;
