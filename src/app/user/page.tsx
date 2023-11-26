import React from "react";
import Options from "./components/Options";
import LogoutBtn from "../ui/globalComponents/LogoutBtn";
import Title from "../ui/globalComponents/title";

const ClientHome = () => {
	return (
		<main className="page-primary justify-around">
			<div className="flex flex-row justify-start w-full">
				<Title className="pr-8" text="שלום חבר" />
			</div>
			<div className="flex flex-col items-center gap-3">
				<Title className="pb-2" text="מה תרצה לעשות?" />
				<Options />
			</div>
			<LogoutBtn />
		</main>
	);
};

export default ClientHome;
