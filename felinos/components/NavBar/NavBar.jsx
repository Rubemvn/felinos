import MemberButton from "../MemberButton/MemberButton";
import { Container, Bar, Logo, List, LinkBar } from "./styles";
import logo from "@/public/images/images/FELINOS.svg";

const NavBar = () => {
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
				<List>
					<li>
						<LinkBar href='#home'>Hom</LinkBar>
					</li>
					<li>
						<LinkBar href='#aboutUS'>Quem somos?</LinkBar>
					</li>
					<li>
						<LinkBar href='#footer'>Contate-nos</LinkBar>
					</li>
					<li>
						<LinkBar href='#member'>
							<MemberButton text='SEJA SÓCIO' />{" "}
						</LinkBar>
					</li>
				</List>
			</Bar>
		</Container>
	);
};

export default NavBar;
