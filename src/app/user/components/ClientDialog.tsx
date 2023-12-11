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
import Image from 'next/image';
import VMarkSvg from '@/app/ui/globalComponents/VMarkSvg';
import XMarkSvg from '@/app/ui/globalComponents/XMarkSvg';
import { Check, X } from 'lucide-react';

type Props = {
  btnContent: string;
  appDate?: string;
  children: React.ReactNode;
  confirmClick?: (date: string) => void;
  saveClick?: () => void;
  cancelClick?: () => void;
  payClick?: () => void;
};

const ClientDialog = ({
  btnContent,
  appDate,
  children,
  confirmClick,
  saveClick,
  cancelClick,
  payClick,
}: Props) => {
  let childrenArray = null;
  if (saveClick) childrenArray = React.Children.toArray(children);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader className="flex flex-col gap-5">
          {appDate && (
            <DialogTitle className="text-center">{appDate}</DialogTitle>
          )}
          {childrenArray && (
            <DialogTitle>
              <u>{childrenArray[0]}</u>
            </DialogTitle>
          )}

          {childrenArray ? (
            <DialogDescription className="flex flex-col items-center gap-2">
              {childrenArray[1]}
              {childrenArray[2]}
              <Image
                src={
                  (childrenArray[3] as React.ReactElement)?.props.children[1]
                }
                height={75}
                width={75}
                alt={childrenArray[1] as string}
              />
            </DialogDescription>
          ) : (
            <DialogDescription>{children}</DialogDescription>
          )}
        </DialogHeader>
        <DialogFooter>
          <DialogClose className="flex justify-center gap-5">
            {cancelClick ? (
              <Button variant={'outline'} size={'icon'} onClick={cancelClick}>
                <X className="h-8 w-8 text-red-600" />
              </Button>
            ) : (
              <Button variant={'outline'} size={'icon'}>
                <X className="h-8 w-8 text-red-600" />
              </Button>
            )}
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                if (appDate && confirmClick) confirmClick(appDate);
                if (saveClick) saveClick();
                if (payClick) payClick();
              }}>
              <Check className="w-8 h-8 text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDialog;
