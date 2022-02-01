import React from "react";
import Button from "./Button";
import Operation from "./Operation";

const Account = ({ name, balance, color, operations }) => {
	return (
		<section className="account">
			<div className="account-title" style={{ backgroundColor: color }}>
				<h2>{name}</h2>
				<h2>{`${balance} €`}</h2>
			</div>
			<ul className="operation-list">
				{operations.map(({ date, description, amount }, index) => {
					return (
						<Operation
							id={index}
							key={index}
							date={date}
							description={description}
							amount={amount}
						/>
					);
				})}
				<Button />
			</ul>
		</section>
	);
};

export default Account;
