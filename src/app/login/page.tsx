import LoginForm from './components/LoginForm';

const Login = () => {
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
