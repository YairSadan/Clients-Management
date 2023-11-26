import LoginForm from "./components/LoginForm"


const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-tertiary font-extrabold text-3xl text-center'>ברוכים הבאים</h1>
      <LoginForm />
    </main>
  )
}

export default Login