import React from "react";
import Logo from "./Logo";
import User from "./User";
import "../styles/header.css";

const Header = () => {
	return (
		<header>
			<Logo />
			<User name="Laura" />
		</header>
	);
};

export default Header;
