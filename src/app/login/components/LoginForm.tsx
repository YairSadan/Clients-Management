'use client';
import Button from '@/app/ui/globalComponents/Button'
import React, { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { data: session, status} = useSession();
    const router = useRouter(); // Add this line

    useEffect(() => {
      if (status === 'authenticated') {
        console.log()
        if (session.user?.email === 'yairsadan1@gmail.com')
          router.push('/admin'); // Update the redirect function to use router.push
        else
          router.push('/user'); // Update the redirect function to use router.push
      }
    }, [status, router]); // Add router to the dependency array

    return (
      <>
        <Button text="התחבר באמצעות גוגל" onClick={() => signIn('google')} /> {/* TODO: add callbackUrl for admin */ }
      </>
    );
  };

  export default LoginForm;
