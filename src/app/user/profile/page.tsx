import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';
import HomeSvg from '@/app/ui/globalComponents/HomeSvg';
import { User } from '@prisma/client';
import UserDetails from './components/UserDetails';
import { findUserByEmail } from '@/lib/actions';

const UserProfile = async () => {
  const session = await getServerSession(authOptions);

  let user: User | null = null;
  if (session) {
    user = await findUserByEmail(session?.user.email);
  }
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
