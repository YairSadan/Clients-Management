'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  btnContent: string;
  children: React.ReactNode;
  saveClick: () => void;
  cancelClick: () => void;
};

const SaveDialog = ({
  btnContent,
  children,
  saveClick,
  cancelClick,
}: Props) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5 flex flex-col gap-10 items-center">
        <DialogHeader className="gap-5">
          <DialogTitle>
            <u>{childrenArray[0]}</u>
          </DialogTitle>
          <DialogDescription className="flex flex-col items-center gap-2">
            {childrenArray[1]}
            {childrenArray[2]}
            <Image
              src={(childrenArray[3] as React.ReactElement)?.props.children}
              height={75}
              width={75}
              alt={childrenArray[1] as string}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-5">
          <DialogClose asChild>
            <Button variant={'outline'} size={'icon'} onClick={cancelClick}>
              <X className="text-red-600" />
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                saveClick();
              }}>
              <Check className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SaveDialog;
