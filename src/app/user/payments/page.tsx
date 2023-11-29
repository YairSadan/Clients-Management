import Title from '@/app/ui/globalComponents/Title';
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
        <div className="flex flex-row justify-start w-full">
          <Title className="pr-8" text="החוב שלך: מלא כסף₪" />
        </div>
        <PayBtn />
      </main>
    </>
  );
};

export default UserPayment;
