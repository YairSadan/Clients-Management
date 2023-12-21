import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import React from 'react';
import AppDialog from './components/AppDialog';
import {
  bookAppoinment,
  cancelAppointment,
  findUserById,
  getAvailableAppointments,
  getUserAppointments,
} from '@/lib/actions';
import { Appointment, User } from '@prisma/client';
import {
  ConvertDateToWhen,
  ConvertToWordDate,
} from '@/app/utils/dates/DateConverter';

type Props = {
  params: {
    id: string;
  };
};

const Appointments = async ({ params }: Props) => {
  const user: User = await findUserById(params.id);
  if (!user) throw new Error('No user');

  const availableAppointments: Appointment[] = await getAvailableAppointments();
  const myAppointments: Appointment[] = await getUserAppointments(params.id);

  //SORTING FUNC
  const compareAppointments = (a: Appointment, b: Appointment) => {
    return new Date(a.start).getTime() - new Date(b.start).getTime();
  };
  // Sort myAppointments and availableAppointments
  myAppointments?.sort(compareAppointments);
  availableAppointments?.sort(compareAppointments);

  const confirmApp = async (appointment: Appointment) => {
    'use server';
    bookAppoinment(user, appointment);
  };
  const cancelApp = async (appointment: Appointment) => {
    'use server';
    cancelAppointment(appointment);
  };

  return (
    <>
      <main className="page-primary justify-center gap-9">
        <HomeSvg />
        <div className="w-3/5">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <u>התורים שלך:</u>
          </h2>
          <div className="flex flex-col gap-2 overflow-y-auto h-[35vh]">
            {myAppointments.length > 0 ? (
              myAppointments.map((app) => (
                <div
                  key={app.id}
                  className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                  {ConvertToWordDate(app.start, true)} -{' '}
                  {ConvertToWordDate(app.end, false)}
                  <AppDialog
                    btnContent={'בטל'}
                    appointment={app}
                    appDate={ConvertDateToWhen(app.start)}
                    confirmClick={cancelApp}>
                    את/ה בטוח שתרצה/י לבטל את הפגישה?
                  </AppDialog>
                </div>
              ))
            ) : (
              <div className="text-center">אין פגישות עתידיות</div>
            )}
          </div>
        </div>
        <div className="w-3/5">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <u>תורים פנויים:</u>
          </h2>
          <div className="flex flex-col gap-2 overflow-y-auto h-[35vh]">
            {availableAppointments.length > 0 ? (
              availableAppointments.map((app) => (
                <div
                  key={app.id}
                  className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                  {ConvertToWordDate(app.start, true)} -{' '}
                  {ConvertToWordDate(app.end, false)}
                  <AppDialog
                    btnContent={'קבע'}
                    appointment={app}
                    appDate={ConvertDateToWhen(app.start)}
                    confirmClick={confirmApp}>
                    את/ה בטוח/ה שתרצה/י לקבוע את הפגישה?
                  </AppDialog>
                </div>
              ))
            ) : (
              <div>אין פגישות עתידיות פנויות</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Appointments;
