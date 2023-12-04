'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import XMarkSvg from './XMarkSvg';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  onOk: () => void;
  children: React.ReactNode;
  secondTitle?: string;
  secondOnOk?: () => void;
};

const Dialog = ({ title, onOk, children, secondTitle, secondOnOk }: Props) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get('showDialog');
  const secondDialog = searchParams.get('secondDialog');
  const router = useRouter();

  const childrenArray = React.Children.toArray(children);
  let dialogTitle: string = title;
  let dialogOnOk: () => void = onOk;
  let dialogChildren: React.ReactNode = childrenArray[0];

  if (secondDialog === 'y') {
    if (secondTitle) dialogTitle = secondTitle;
    if (secondOnOk) dialogOnOk = secondOnOk;
    dialogChildren = childrenArray[1];
  }

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.back();
  };

  const okClick = () => {
    dialogOnOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <>
        {/* Backdrop overlay - to make the screen go dark*/}
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 backdrop-brightness-50"></div>
        <dialog
          ref={dialogRef}
          className="flex flex-col justify-center gap-2 py-3 text-center px-5 rounded-lg bg-primary">
          <XMarkSvg
            onClick={closeDialog}
            className="absolute top-2 right-2 h-5 w-5 cursor-pointer"
          />
          {/* <div className=""> */}
          <h1 className="flex justify-center font-bold text-2xl">
            <u>{dialogTitle}</u>
          </h1>
          <article className="text-center">{dialogChildren}</article>
          <Button
            className="border-2 bg-accent text-secondary rounded-xl my-2 px-2"
            onClick={okClick}>
            OK
          </Button>
          {/* </div> */}
        </dialog>
      </>
    ) : null;

  return dialog;
};

export default Dialog;
