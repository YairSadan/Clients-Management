import React from 'react';
import PayBtn from '../components/PayBtn';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import Dialog from '@/app/ui/globalComponents/Dialog';

const UserPayment = () => {
  // async function onClose() {
  //   'use server';
  //   console.log('Modal has closed');
  // }
  async function onOk() {
    'use server';
    console.log('ok was clicked');
  }

  return (
    <>
      <Dialog title="לתשלום: ₪" onOk={onOk}>
        <p>בטוח?</p>
      </Dialog>

      <main className="page-primary justify-around">
        <HomeSvg />
        <div className="flex flex-row justify-start w-full pr-8">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            החוב שלך: ₪
          </h2>
        </div>
        <PayBtn />
      </main>
    </>
  );
};

export default UserPayment;
