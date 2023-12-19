import React from 'react';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import PayDialog from './components/PayDialog';
import { getUsersOwedForAppointments } from '@/lib/actions';

type Props = {
  params: {
    id: string;
  };
};

const UserPayment = async ({ params }: Props) => {
  const owed: number = await getUsersOwedForAppointments(params.id);

  async function onOk(shekels: number) {
    'use server';
    console.log(`${shekels} shekels were payed`);
  }

  return (
    <>
      <main className="page-primary justify-around">
        <HomeSvg />
        <div className="flex flex-row justify-start w-full pr-8">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            החוב שלך: {owed}₪
          </h2>
        </div>
        <PayDialog btnContent={'לתשלום'} payClick={onOk} amountToPay={owed}>
          <p>בטוח?</p>
        </PayDialog>
      </main>
    </>
  );
};

export default UserPayment;
