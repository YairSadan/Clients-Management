import React from 'react';
import Title from '../ui/globalComponents/Title';
import LogoutBtn from '../ui/globalComponents/LogoutBtn';
import AdminOptions from './components/AdminOptions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const AdminHome: React.FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="page-primary justify-around">
      <div className="flex flex-row justify-start w-full">
        <Title className="pr-8" text={`שלום ${session?.user.name}`} />
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
