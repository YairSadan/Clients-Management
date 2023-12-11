'use client';
import React, { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter(); // Add this line

  useEffect(() => {
    if (status === 'authenticated') {
      console.log();
      if (session.user?.email === 'yairsadan1@gmail.com') router.push('/admin');
      // Update the redirect function to use router.push
      else if (session.user?.email !== null)
        router.push('/user'); // Update the redirect function to use router.push
      else throw new Error();
    }
  }, [status, router, session?.user?.email]); // Add router to the dependency array

  return (
    <>
      <Button size={'lg'} onClick={() => signIn('google', { callbackUrl: '/user' })}>התחבר</Button>
      {/* TODO: add callbackUrl for admin */}
    </>
  );
};

export default LoginForm;
