import React from 'react';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import PayDialog from './components/PayDialog';
import ClientDialog from '../components/ClientDialog';

const UserPayment = () => {
  async function onOk() {
    'use server';
    console.log('pay was clicked');
  }

  return (
    <>
      <main className="page-primary justify-around">
        <HomeSvg />
        <div className="flex flex-row justify-start w-full pr-8">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            החוב שלך: ₪
          </h2>
        </div>
        {/* <PayDialog btnContent={'לתשלום'} okClick={onOk}>
          <p>בטוח?</p>
        </PayDialog> */}
        <ClientDialog btnContent={'לתשלום'} payClick={onOk}>
          <p>בטוח?</p>
        </ClientDialog>
      </main>
    </>
  );
};

export default UserPayment;
