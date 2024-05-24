"use client";
import { ThemeProvider } from "styled-components";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Grid } from "./styles";
import theme from "@/styles/theme";
import Mixer from "../Mixer/Mixer";

const Layout = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid>
				<NavBar />
				<Content />
				<Footer />
			</Grid>
			{/* <Mixer /> */}
		</ThemeProvider>
	);
};

export default Layout;
