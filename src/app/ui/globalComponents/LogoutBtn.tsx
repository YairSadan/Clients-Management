'use client';
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";


const LogoutBtn = () => {
	return <Button size={'lg'} onClick={() => signOut()}>התנתק<LogOut className="mr-2 h-4 w-4"/></Button>;
};

export default LogoutBtn;
