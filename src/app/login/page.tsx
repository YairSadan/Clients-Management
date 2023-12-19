import { findUserByEmail } from '@/lib/actions';
import { authOptions } from '@/lib/auth';
import { Role, User } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import LoginForm from './components/LoginForm';

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    const user: User = await findUserByEmail(session.user.email);
    user.role === Role.ADMIN
      ? redirect(`/admin/${user?.id}`)
      : redirect(`/user/${user?.id}`);
  }
  return (
    !session && (
      <main className="page-primary justify-center">
        <h1 className="pb-60 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          ברוכים הבאים
        </h1>
        <div className="flex flex-col items-center gap-6">
          <LoginForm />
        </div>
      </main>
    )
  );
};

export default Login;
