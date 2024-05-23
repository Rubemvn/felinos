import { useState } from "react";
import MemberButton from "../MemberButton/MemberButton";
import { Container, Bar, Logo, List, LinkBar, MenuHamburger } from "./styles";
import logo from "@/public/images/images/FELINOS.svg";
import MemberButton2 from "../MemberButton-2/MemberButton-2";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container>
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
					scale='1.2'
				/>
				<MenuHamburger
					onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
					<div className='line1'></div>
					<div className='line2'></div>
					{/* <div className='line3'></div> */}
				</MenuHamburger>
				<List display={isOpen}>
					<li>
						<LinkBar href='#home'>Home</LinkBar>
					</li>
					<li>
						<LinkBar href='#aboutUS'>Quem somos?</LinkBar>
					</li>
					<li>
						<LinkBar href='#footer'>Contate-nos</LinkBar>
					</li>
					<li>
						<LinkBar href='#member'>
							<MemberButton text='SEJA SÓCIO' />
						</LinkBar>
					</li>
				</List>
			</Bar>
		</Container>
	);
};

export default NavBar;
