import React from "react";
import Home from "../Home/Home";
import { Container } from "./styles";
import AboutUs from "../AboutUs/AboutUs";
import TheClub from "../TheClub/TheClub";

const Content = () => {
	return (
		<Container>
			<Home />
			<AboutUs />
			<TheClub />
		</Container>
	);
};

export default Content;
