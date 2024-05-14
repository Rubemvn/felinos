import React from "react";
import Home from "../Home/Home";
import { Container } from "./styles";
import AboutUs from "../AboutUs/AboutUs";

const Content = () => {
	return (
		<Container>
			<Home />
			<AboutUs />
		</Container>
	);
};

export default Content;
