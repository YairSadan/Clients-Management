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
import { Icon } from '@radix-ui/react-select';
import { CheckCircledIcon } from '@radix-ui/react-icons';

type Props = {
  btnContent: string;
  appDate?: string;
  appDateTimeSlot?: string;
  children: React.ReactNode;
  confirmClick?: (date: string) => void;
  saveClick?: () => void;
  cancelClick?: () => void;
  payClick?: (shekels: number) => void;
  amountToPay?: number;
};

const ClientDialog = ({
  btnContent,
  appDate,
  appDateTimeSlot,
  children,
  confirmClick,
  saveClick,
  cancelClick,
  payClick,
  amountToPay,
}: Props) => {
  let childrenArray = null;
  if (saveClick) childrenArray = React.Children.toArray(children);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{btnContent}</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5 flex flex-col gap-8">
        <DialogHeader className="flex flex-col gap-5">
          {appDate && (
            <DialogTitle className="text-center">
              מועד הפגישה: {appDate}
            </DialogTitle>
          )}
          {childrenArray && (
            <DialogTitle>
              <u className="text-red-600">{childrenArray[0]}</u>
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
                <Icon className="h-8 w-8 text-red-600" />
              </Button>
            ) : (
              <Button variant={'outline'} size={'icon'}>
                <Icon className="h-8 w-8 text-red-600" />
              </Button>
            )}
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => {
                if (appDateTimeSlot && confirmClick)
                  confirmClick(appDateTimeSlot);
                if (saveClick) saveClick();
                if (amountToPay && payClick) payClick(amountToPay);
              }}>
              <CheckCircledIcon className="w-8 h-8 text-green-600" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDialog;
