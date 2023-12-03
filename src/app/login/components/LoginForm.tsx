'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
  return (
    <>
      <Button size={'lg'} onClick={() => signIn('google', { callbackUrl: '/user' })}>התחבר</Button>
      {/* TODO: add callbackUrl for admin */}
    </>
  );
};

export default LoginForm;
