import Title from '../ui/globalComponents/Title';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <main className="page-primary justify-center">
        <Title className='pb-60' text="ברוכים הבאים" />
      <div className="flex flex-col items-center gap-6">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
