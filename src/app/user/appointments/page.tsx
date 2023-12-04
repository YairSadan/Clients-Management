import Dialog from '@/app/ui/globalComponents/Dialog';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import React from 'react';
import CancelBtn from './components/CancelBtn';
import ConfirmBtn from './components/ConfirmBtn';

const Appointments = () => {
  const comfirmApp = async () => {
    'use server';
    console.log('Comfirmed');
  };
  const cancelApp = async () => {
    'use server';
    console.log('Canceled');
  };

  return (
    <>
      <Dialog title="Are you sure?" onOk={cancelApp} secondOnOk={comfirmApp}>
        <p>Are you sure that you would like to cancel this appointment?</p>
        <p>Are you sure you would like to book this appointment?</p>
      </Dialog>

      <main className="page-primary justify-center gap-5">
        <HomeSvg />
        <div className="w-4/5">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            התורים שלך:
          </h2>
          my appointments {/* children*/}
          {/* example*/}
          <div className="bg-orange-900 rounded-md flex items-center justify-between p-2">
            tuesday 21/12
            <CancelBtn />
          </div>
        </div>
        <div className="w-4/5">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            תורים פנויים:
          </h2>
          available appointments
          {/* example*/}
          <div className="bg-orange-900 rounded-md flex items-center justify-between p-2">
            wensday 21/12
            <ConfirmBtn />
          </div>
        </div>
      </main>
    </>
  );
};

export default Appointments;
