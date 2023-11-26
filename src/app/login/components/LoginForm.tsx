import React from "react";

const LoginForm = () => {
	return (
		<>
			<input
				type="text"
				placeholder="טלפון:"
				className="btn-primary placeholder-tertiary-700"
			/>
			<button type="submit" className="btn-primary">
				שלח קוד אימות
			</button>
		</>
	);
};

export default LoginForm;
