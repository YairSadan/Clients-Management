import React from 'react';
import AppDialog from './components/AppDialog';
import { getUserById } from '@/data/user';
import { Appointment } from '@prisma/client';

type Props = {
  params: {
    id: string;
  };
};

const Appointments = async ({ params }: Props) => {
  const user = await getUserById(params.id);
  if (!user) throw new Error('No user');

  // const availableAppointments: Appointment[] | null = await getAvailableAppointments();
  // const myAppointments: Appointment[] | null = await getUserAppointments(params.id);

  // //SORTING FUNC
  // const compareAppointments = (a: Appointment, b: Appointment) => {
  //   return new Date(a.start).getTime() - new Date(b.start).getTime();
  // };
  // // Sort myAppointments and availableAppointments
  // myAppointments?.sort(compareAppointments);
  // availableAppointments?.sort(compareAppointments);

  // const confirmApp = async (appointment: Appointment) => {
  //   'use server';
  //   bookAppoinment(user, appointment);
  // };
  // const cancelApp = async (appointment: Appointment) => {
  //   'use server';
  //   // cancelAppointment(appointment);
  // };

  return (
    <>
      {/* <main className="page-primary justify-center gap-9">
        <div className="w-3/5">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <u>התורים שלך:</u>
          </h2>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[35vh]">
            {myAppointments &&
              myAppointments.map((app) => (
                <div
                  key={app.id}
                  className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                  {ConvertToWordDate(app.start, true)} - {ConvertToWordDate(app.end, false)}
                  <AppDialog
                    btnContent={'בטל'}
                    appointment={app}
                    appDate={ConvertDateToWhen(app.start)}
                    confirmClick={cancelApp}>
                    <p>את/ה בטוח שתרצה/י לבטל את הפגישה?</p>
                  </AppDialog>
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
            {/* {availableAppointments &&
              availableAppointments.map((app) => (
                <div
                  key={app.id}
                  className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                  {ConvertToWordDate(app.start, true)} - {ConvertToWordDate(app.end, false)}
                  <AppDialog
                    btnContent={'קבע'}
                    appointment={app}
                    appDate={ConvertDateToWhen(app.start)}
                    confirmClick={confirmApp}>
                    <p>Are you sure that you would like to book this appointment?</p>
                  </AppDialog> */}
                {/* </div>
              ))}
          </div>
        </div>
      </main> */}
    </>
  );
};

export default Appointments;
