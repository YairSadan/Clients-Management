import React from 'react';
import Options from './components/Options';
import LogoutBtn from '../ui/globalComponents/LogoutBtn';
import Title from '../ui/globalComponents/Title';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const ClientHome = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="page-primary justify-around">
      <div className="flex flex-row justify-start w-full">
        <Title text={`שלום ${session?.user.name}`} />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Title className="pb-2" text="מה תרצה לעשות?" />
        <Options />
      </div>
      <LogoutBtn />
    </main>
  );
};

export default ClientHome;
