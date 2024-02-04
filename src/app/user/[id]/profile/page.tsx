import React from 'react';
import { User } from '@prisma/client';
import UserDetails from './components/UserDetails';
import { getUserById } from '@/data/user';

type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({ params }: Props) => {
  const user = await getUserById(params.id);
  return (
    <>
      <main className="page-primary justify-center">
        <UserDetails user={user} />
      </main>
    </>
  );
};

export default UserProfile;
