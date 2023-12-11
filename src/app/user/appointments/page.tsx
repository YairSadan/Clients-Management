import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import React from 'react';
import AppDialog from './components/AppDialog';
import ClientDialog from '../components/ClientDialog';
import { findUserByEmail, getUsersAppointments } from '@/lib/actions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Appointment, User } from '@prisma/client';
import {
  ConvertDateToWhen,
  ConvertToWordDate,
} from '@/app/utils/dates/DateConverter';

const Appointments = async () => {
  const session = await getServerSession(authOptions);
  let user: User | null = null;
  if (session) {
    user = await findUserByEmail(session?.user.email);
  }

  let testConfirmApps = [
    {
      id: 1,
      date: '21/11 sun',
    },
    {
      id: 2,
      date: 'mon',
    },
    {
      id: 3,
      date: 'tues',
    },
    {
      id: 4,
      date: 'wens',
    },
    {
      id: 5,
      date: 'thurs',
    },
    {
      id: 6,
      date: 'fri',
    },
    {
      id: 7,
      date: 'sat',
    },
    {
      id: 8,
      date: 'qwerty',
    },
  ];
  let myAppointments: Appointment[] | null = null;
  if (user) {
    myAppointments = await getUsersAppointments(user?.id);
  }
  const confirmApp = async (date: string) => {
    'use server';
    console.log(`${date} Comfirmed`);
  };
  const cancelApp = async (date: string) => {
    'use server';
    console.log(`${date} Canceled`);
  };

  return (
    <>
      <main className="page-primary justify-center gap-9">
        <HomeSvg />
        <div className="w-3/5">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <u>התורים שלך:</u>
          </h2>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[35vh]">
            {/* example*/}
            {myAppointments &&
              myAppointments.map((app) => (
                <div
                  key={app.id}
                  className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                  {ConvertToWordDate(app.start, true)} -{' '}
                  {ConvertToWordDate(app.end, false)}
                  {/* <AppDialog
                  btnContent={'Cancel'}
                  appDate={app.date}
                  okClick={cancelApp}>
                  <p>
                    Are you sure that you would like to cancel this appointment?
                  </p>
                </AppDialog> */}
                  <ClientDialog
                    btnContent={'בטל'}
                    // appDate={app.date}
                    confirmClick={cancelApp}>
                    <p>
                      את/ה בטוח שתרצה/י לבטל את הפגישה? <br /> מועד הפגישה:{' '}
                      {ConvertDateToWhen(app.start)}
                    </p>
                  </ClientDialog>
                </div>
              ))}
          </div>
        </div>
        <div className="w-3/5">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <u>תורים פנויים:</u>
          </h2>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[35vh]">
            {/* example*/}
            {testConfirmApps.map((app) => (
              <div
                key={app.id}
                className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                {app.date}
                {/* <AppDialog
                  btnContent={'Book'}
                  appDate={app.date}
                  okClick={comfirmApp}>
                  <p>
                    Are you sure that you would like to book this appointment?
                  </p>
                </AppDialog> */}
                <ClientDialog
                  btnContent={'Book'}
                  appDate={app.date}
                  confirmClick={confirmApp}>
                  <p>את/ה בטוח שתרצה/י לשריין את הפגישה הזאת?</p>
                </ClientDialog>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Appointments;
