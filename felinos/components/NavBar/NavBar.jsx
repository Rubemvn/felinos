import { useEffect, useState } from "react";
import MemberButton from "../MemberButton/MemberButton";
import { Container, Bar, Logo, List, LinkBar, MenuHamburger } from "./styles";
import logo from "@/public/images/images/FELINOS.svg";
import MemberButton2 from "../MemberButton-2/MemberButton-2";
import GlobalStyles from "@/styles/GlobalStyles";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		window.location.hash = "#home";
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	return (
		<Container>
			<GlobalStyles isOpen={isOpen} />
			<Bar>
				<LinkBar href='/'>
					<Logo
						src={logo}
						alt='Logotipo do clube de desbravadores Felinos'
						priority={true}
					/>
				</LinkBar>
				<MemberButton2
					display={isOpen}
					text=''
					scale='1.05'
				/>
				<MenuHamburger
					onClick={handleClick}
					isOpen={isOpen}>
					<div className='line1'></div>
					<div className='line2'></div>
					{/* <div className='line3'></div> */}
				</MenuHamburger>

				<List display={isOpen}>
					<li>
						<LinkBar
							href='#home'
							onClick={() => {
								isOpen ? setIsOpen(false) : "";
							}}>
							Home
						</LinkBar>
					</li>
					<li>
						<LinkBar
							href='#aboutUS'
							onClick={() => {
								isOpen ? setIsOpen(false) : "";
							}}>
							Quem somos?
						</LinkBar>
					</li>
					<li>
						<LinkBar
							href='#footer'
							onClick={() => {
								isOpen ? setIsOpen(false) : "";
							}}>
							Contate-nos
						</LinkBar>
					</li>
					<li>
						<LinkBar
							className='btnName'
							href='#member'
							onClick={() => {
								isOpen ? setIsOpen(false) : "";
							}}>
							<MemberButton text='SEJA SÓCIO' />
						</LinkBar>
					</li>
				</List>
			</Bar>
		</Container>
	);
};

export default NavBar;
