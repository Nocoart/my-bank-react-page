import React from "react";

const Operation = ({ id, date, description, amount }) => {
	const color = (num) => {
		if (num % 2 === 1) {
			return "#EFEFEF";
		}
	};
	return (
		<li className="operation-item" style={{ backgroundColor: color(id) }}>
			<div className="operation-date"> {date}</div>
			<div className="operation-description">{description}</div>
			<div className="operation-amount">{amount} €</div>
		</li>
	);
};

export default Operation;
