import { getServerSession } from 'next-auth';
import LoginForm from './components/LoginForm';
import { authOptions } from '@/lib/auth';
import { Role, User } from '@prisma/client';
import { findUserByEmail } from '@/lib/actions';
import { redirect } from 'next/navigation';

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    const user: User | null = await findUserByEmail(session?.user.email);
    if (session?.user) {
      if (session.user.role === Role.ADMIN) redirect(`/admin/${user?.id}`);
      else if (session.user.role === Role.CLIENT) redirect(`/user/${user?.id}`);
      else throw new Error();
    }
  }

  return (
    <main className="page-primary justify-center">
      <h1 className="pb-60 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        ברוכים הבאים
      </h1>
      <div className="flex flex-col items-center gap-6">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
