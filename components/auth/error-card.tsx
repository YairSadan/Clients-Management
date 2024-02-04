import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { CardWrapper } from './card-wrapper';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="אופס! משהו השתבש!"
      backButtonHref="/auth/login"
      backButtonLabel="חזרה לדף ההתחברות">
      <div className="flex justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
