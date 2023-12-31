import React from 'react';
import LogoutBtn from '../ui/globalComponents/LogoutBtn';
import AdminOptions from './components/AdminOptions';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const AdminHome: React.FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="page-primary justify-around">
      <div className="flex flex-row justify-start w-full pr-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          שלום {session?.user.name}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="pb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          מה תרצה לעשות?
        </h3>
        <AdminOptions />
      </div>
      <LogoutBtn />
    </main>
  );
};

export default AdminHome;
