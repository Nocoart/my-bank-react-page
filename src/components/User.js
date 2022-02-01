import React from "react";
import userPic from "../assets/img/user.jpg";

const User = ({ name }) => {
	return (
		<div className="user">
			<p>{name}</p>
			<img src={userPic} alt="" />
		</div>
	);
};

export default User;
