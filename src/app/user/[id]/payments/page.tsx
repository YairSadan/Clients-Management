import React from 'react';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import PayDialog from './components/PayDialog';
import {
  findUserById,
  getUserAppointmentOwedFor,
  getUsersOwedForAppointments,
} from '@/lib/actions';
import { ConvertToWordDate } from '@/app/utils/dates/DateConverter';
import { User } from '@prisma/client';

type Props = {
  params: {
    id: string;
  };
};

const UserPayment = async ({ params }: Props) => {
  const owed: number = await getUsersOwedForAppointments(params.id);
  const user: User = await findUserById(params.id);
  const appointmentsOwed: {
    Appointment: {
      id: string;
      start: Date;
      end: Date;
      userId: string | null;
      title: string;
      completed: boolean;
      payed: boolean;
    }[];
  } | null = await getUserAppointmentOwedFor(params.id);

  async function payAll(shekels: number) {
    'use server';
    console.log(`${shekels} shekels were payed`);
  }
  async function paySingle(shekels: number) {
    'use server';
    console.log(`${shekels} shekels were payed`);
  }

  return (
    <>
      <main className="page-primary justify-around">
        <HomeSvg />
        <div className="flex flex-col gap-10 justify-start w-full pr-8">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            החוב שלך: {owed}₪
          </h2>
          <section className="flex flex-col items-center gap-5">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              <u>פגישות שעדיין לא שולמו:</u>
            </h4>
            <div className="flex flex-col gap-2 w-3/5 overflow-y-auto h-[50vh]">
              {appointmentsOwed ? (
                appointmentsOwed.Appointment.map((app) => (
                  <div
                    key={app.id}
                    className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                    {ConvertToWordDate(app.start, true)} -{' '}
                    {ConvertToWordDate(app.end, false)}
                    <PayDialog
                      btnContent={'שלם'}
                      payClick={paySingle}
                      amountToPay={user.pricePerAppointment}>
                      בטוח?
                    </PayDialog>
                  </div>
                ))
              ) : (
                <div>אין פגישות לתשלום!</div>
              )}
            </div>
          </section>
        </div>
        <PayDialog
          btnContent={'תשלום על כל הפגישות'}
          payClick={payAll}
          amountToPay={owed}>
          בטוח?
        </PayDialog>
      </main>
    </>
  );
};

export default UserPayment;
