import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
	height: 51.2rem;
	background-color: ${(props) => props.theme.colors.primary};
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	flex-direction: column;
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 80%;
	height: 100%;
`;

export const Logos = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export const LogoFelinos = styled(Image)`
	width: 19rem;
	height: auto;
`;

export const Unidades = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 75%;
`;

export const LogoUnidade = styled(Image)`
	height: 6.5rem;
	width: auto;
`;

export const LogoOrgs = styled.div`
	display: flex;
	justify-content: space-around;
	width: 50%;
`;

export const LogoOrg = styled(Image)`
	height: 9rem;
	width: auto;
`;

export const Links = styled.div`
	display: flex;
	width: 100%;
	height: 100%;

	ul {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;
	}

	li {
		list-style: none;
		font-size: 3rem;
		font-weight: 600;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: ${(props) => props.theme.colors.white};
	}

	.memberButton {
		scale: 1.2;
	}
`;

export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-end;
`;

export const ContactLink = styled(Link)`
	font-size: 2.6rem;
	font-weight: 500;
	text-decoration: none;
	color: ${(props) => props.theme.colors.white};
	align-items: center;
	display: flex;
	gap: 1rem;
`;

export const DevelopedBy = styled.div`
	background-color: ${(props) => props.theme.colors.info};
	width: 100%;
	height: 4rem;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.textInfo};
	font-size: 2.2rem;
	font-style: italic;
	font-weight: 500;

	a {
		color: ${(props) => props.theme.colors.textInfo};
	}
`;
