'use client';
import Button from "@/app/ui/globalComponents/button";
import React from "react";

const LoginForm = () => {
	return (
		<>
			<input
				type="text"
				placeholder="טלפון:"
				className="border-2 border-accent bg-secondary rounded-lg p-2 w-48 placeholder-tertiary-700"
			/>
            <Button text="שלח קוד אימות" onClick={() => {}} />
		</>
	);
};

export default LoginForm;
