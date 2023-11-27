'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

const Dialog = ({ title, onClose, onOk, children }: Props) => {
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
    onClose();
  };

  const okClick = () => {
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <dialog ref={dialogRef}>
        <div>
          <div>
            <h1>{title}</h1>
            <button onClick={closeDialog}>X</button>
          </div>
          <div>
            {children}
            <div>
              <button onClick={okClick}>OK</button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Dialog;
