'use client';
import Button from "@/app/ui/globalComponents/button";
import React from "react";

const LoginForm = () => {
	return (
		<>
			<input
				type="text"
				placeholder="טלפון:"
				className="btn-primary placeholder-tertiary-700"
			/>
            <Button text="שלח קוד אימות" onClick={() => {}} />
		</>
	);
};

export default LoginForm;
