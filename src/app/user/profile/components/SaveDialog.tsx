'use client';
import VMarkSvg from '@/app/ui/globalComponents/VMarkSvg';
import XMarkSvg from '@/app/ui/globalComponents/XMarkSvg';
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
import Image from 'next/image';
import React from 'react';

type Props = {
  btnContent: string;
  children: React.ReactNode;
  okClick: () => void;
  cancelClick: () => void;
};

const SaveDialog = ({ btnContent, children, okClick, cancelClick }: Props) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader className="flex flex-col gap-5">
          <DialogTitle>
            <u>{childrenArray[0]}</u>
          </DialogTitle>
          <DialogDescription className="flex flex-col items-center gap-2">
            {childrenArray[1]}
            {childrenArray[2]}
            <Image
              src={(childrenArray[3] as React.ReactElement)?.props.children[1]}
              height={75}
              width={75}
              alt={childrenArray[1] as string}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="flex justify-center gap-5">
            <Button variant={'outline'} size={'icon'} onClick={cancelClick}>
              <XMarkSvg className="text-red-600" />
            </Button>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                okClick();
              }}>
              <VMarkSvg className="text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SaveDialog;
