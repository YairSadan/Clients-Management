'use client';
import React, { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Role } from '@prisma/client';

const LoginForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session.user) {
      if (session.user.role === Role.ADMIN) router.push('/admin');
      else if (session.user.role === Role.CLIENT)
        router.push('/user');
      else throw new Error();
    }
  }, [router, session?.user, status]);

  return (
    <>
      <Button size={'lg'} onClick={() => signIn('google', { callbackUrl: '/user' })}>התחבר</Button>
      {/* TODO: add callbackUrl for admin */}
    </>
  );
};

export default LoginForm;