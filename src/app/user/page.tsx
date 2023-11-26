import React from "react";
import Options from "./components/Options";
import LogoutBtn from "../ui/globalComponents/LogoutBtn";

const ClientHome = () => {
	return (
		<main className="page-primary justify-around">
			<div className="flex flex-row justify-start w-full">
				<h1 className="title-primary pr-8">שלום חבר</h1>
			</div>
			<div className="flex flex-col items-center gap-3">
				<h1 className="title-primary pb-2">מה תרצה לעשות?</h1>
				<Options />
			</div>
			<LogoutBtn />
		</main>
	);
};

export default ClientHome;
