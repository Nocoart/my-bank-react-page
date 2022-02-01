import React from "react";
import data from "../assets/data/data.json";
import Account from "./Account";
import "../styles/accounts.css";

const Accounts = () => {
	return (
		<main>
			{data.map(({ name, balance, color, operations }, index) => {
				return (
					<Account
						key={index}
						name={name}
						balance={balance}
						color={color}
						operations={operations}
					/>
				);
			})}
		</main>
	);
};

export default Accounts;
