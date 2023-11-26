import LoginForm from "./components/LoginForm";

const Login = () => {
	return (
		<main className="page-primary justify-center">
			<h1 className="title-primary pb-60">ברוכים הבאים</h1>

			<div className="flex flex-col items-center gap-6">
				<LoginForm />
			</div>
		</main>
	);
};

export default Login;
