import React from "react";
import Home from "../Home/Home";
import { Container } from "./styles";
import AboutUs from "../AboutUs/AboutUs";
import TheClub from "../TheClub/TheClub";
import Member from "../Member/Member";

const Content = () => {
	return (
		<Container>
			<Home />
			{/* <AboutUs />
			<TheClub />
			<Member /> */}
		</Container>
	);
};

export default Content;
