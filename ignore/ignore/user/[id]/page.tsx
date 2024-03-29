import React from 'react';
import Options from '../components/Options';
import { getUserById } from '@/data/user';

type Props = {
  params: {
    id: string;
  };
};

const ClientHomePage = async ({ params }: Props) => {
  const user = await getUserById(params.id);
  return (
    user && (
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
      </main>
    )
  );
};

export default ClientHomePage;
