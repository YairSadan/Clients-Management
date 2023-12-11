import React from 'react';
import Options from './components/Options';
import LogoutBtn from '../ui/globalComponents/LogoutBtn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { findUserByEmail } from '@/lib/actions';
import { User } from '@prisma/client';

const ClientHome = async () => {
  const session = await getServerSession(authOptions);
  let user: User | null = null;
  if (session) {
    user = await findUserByEmail(session?.user.email);
  }
  return user ? (
    <main className="page-primary justify-around">
      <div className="flex flex-row justify-start w-full pr-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          שלום {user.name}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="pb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
          מה תרצה לעשות?
        </h3>
        <Options />
      </div>
      <LogoutBtn />
    </main>
  ) : (
    <div>No session detected</div>
  );
};

export default ClientHome;
