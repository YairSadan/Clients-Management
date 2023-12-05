import Dialog from '@/app/ui/globalComponents/Dialog';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import React from 'react';
import CancelBtn from './components/CancelBtn';
import ConfirmBtn from './components/ConfirmBtn';

const Appointments = () => {
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
  let testCancelApps = [
    {
      id: 1,
      date: 'ererer',
    },
    {
      id: 2,
      date: 'ggggg',
    },
    {
      id: 3,
      date: 'tufffffes',
    },
    {
      id: 4,
      date: 'dddddd',
    },
    {
      id: 5,
      date: 'sssssssss',
    },
    {
      id: 6,
      date: 'aaaa',
    },
    {
      id: 7,
      date: 'rrrrrr',
    },
    {
      id: 8,
      date: 'rtyui',
    },
  ];
  const comfirmApp = async (date: string) => {
    'use server';
    console.log(`${date} Comfirmed`);
  };
  const cancelApp = async (date: string) => {
    'use server';
    console.log(`${date} Canceled`);
  };

  return (
    <>
      <Dialog title="Are you sure?" onOk={cancelApp} secondOnOk={comfirmApp}>
        <p>Are you sure that you would like to cancel this appointment?</p>
        <p>Are you sure you would like to book this appointment?</p>
      </Dialog>

      <main className="page-primary justify-center gap-9">
        <HomeSvg />
        <div className="w-4/5">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            <u>התורים שלך:</u>
          </h2>
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[35vh]">
            {/* example*/}
            {testCancelApps.map((app) => (
              <div
                key={app.id}
                className="bg-orange-900 rounded-md flex items-center justify-between p-2">
                {app.date}
                <CancelBtn date={app.date} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-4/5">
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
                <ConfirmBtn date={app.date} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Appointments;
