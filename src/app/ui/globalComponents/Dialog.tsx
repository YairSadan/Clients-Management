'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

type Props = {
  title: string;
  onOk: () => void;
  children: React.ReactNode;
};

const Dialog = ({ title, onOk, children }: Props) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get('showDialog');
  const router = useRouter();
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
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <>
        {/* Backdrop overlay - to make the screen go dark*/}
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 backdrop-brightness-50"></div>

        <dialog ref={dialogRef} className="w-1/2 h-1/5 rounded-lg bg-primary">
          <button
            className="mr-1 mt-1 px-2 rounded-xl bg-accent"
            onClick={closeDialog}>
            X
          </button>
          <h1 className="flex justify-center font-bold text-2xl">
            <u>{title}</u>
          </h1>
          <article className="text-center">
            {children}
            <button
              className="border-2 bg-accent text-secondary rounded-xl my-2 px-2"
              onClick={okClick}>
              OK
            </button>
          </article>
        </dialog>
      </>
    ) : null;

  return dialog;
};

export default Dialog;
