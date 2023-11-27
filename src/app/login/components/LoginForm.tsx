'use client';
import Button from '@/app/ui/globalComponents/Button'
import React from 'react';
import { signIn } from 'next-auth/react';
const LoginForm = () => {
  return (
    <>
		  <Button text="התחבר באמצעות גוגל" onClick={() => signIn('google', { callbackUrl: '/user' })} /> {/* TODO: add callbackUrl for admin */ }
    </>
  );
};

export default LoginForm;
