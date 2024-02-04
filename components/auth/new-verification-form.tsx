'use client';
import { useSearchParams } from 'next/navigation';
import { CardWrapper } from './card-wrapper';
import { BeatLoader } from 'react-spinners';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import { FormSuccess } from '../form-success';
import { FormError } from '../form-error';
export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError('לא נמצא טוקן');
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('משהו השתבש!');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      headerLabel="אמת את כתובת המייל שלך"
      backButtonLabel="חזרה לדף ההתחברות"
      backButtonHref="/auth/login">
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
export default NewVerificationForm;
