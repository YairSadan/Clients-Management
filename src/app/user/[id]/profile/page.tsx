import React from 'react';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import { User } from '@prisma/client';
import UserDetails from './components/UserDetails';
import { findUserById } from '@/lib/actions';

type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({ params }: Props) => {
  const user: User | null = await findUserById(params.id);
  return (
    <>
      <HomeSvg />
      <main className="page-primary justify-center">
        <UserDetails user={user} />
      </main>
    </>
  );
};

export default UserProfile;
