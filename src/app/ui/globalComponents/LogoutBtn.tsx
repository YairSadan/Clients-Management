'use client';
import React from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
	return <Button text="התנתק" onClick={() => signOut()} />;
};

export default LogoutBtn;
