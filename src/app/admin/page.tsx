import React from 'react';
import Title from '../ui/globalComponents/Title';
import LogoutBtn from '../ui/globalComponents/LogoutBtn';
import AdminOptions from './components/AdminOptions';

const AdminHome = () => {
  return (
    <main className="page-primary justify-around">
      <div className="flex flex-row justify-start w-full">
        <Title className="pr-8" text="שלום מנהל" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Title className="pb-2" text="מה תרצה לעשות?" />
        <AdminOptions />
      </div>
      <LogoutBtn />
    </main>
  );
};

export default AdminHome;
