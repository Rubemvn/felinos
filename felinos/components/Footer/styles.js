import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
	height: 51.2rem;
	background-color: ${(props) => props.theme.colors.primary};
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 1300px) {
		height: 102.4rem;
	}
	@media ${({ theme }) => theme.device.tablet} {
		height: 153.6rem;
	}
	`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas: 
	"UN LK CT"
	;
	gap: 2rem;
	width: 80%;
	height: 100%;
	
	@media ${({ theme }) => theme.device.laptopL} {
		width: 90%;
	}
	@media (max-width: 1300px) {
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas: 
	"CT LK"
	"UN UN"
	;
}
@media ${({ theme }) => theme.device.tablet} {
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas: 
	"UN"
	"LK"
	"CT"
	;
	}
`;

export const Logos = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	grid-area: UN;
	
	`;

export const LogoFelinos = styled(Image)`
	width: 19rem;
	height: auto;
	`;

export const Unidades = styled.div`

display: flex;
justify-content: space-around;
width: 75%;
@media (max-width: 1300px) {
	width: 50%;
}
@media ${({ theme }) => theme.device.tablet} {
	width: 75%;
}
@media ${({ theme }) => theme.device.mobileL} {
		width: 90%;
	}
`;

export const LogoUnidade = styled(Image)`
	width: auto;
	height: 6.5rem;
	
	@media ${({ theme }) => theme.device.mobileM} {	
		height: 5rem;
}
	`;

export const LogoOrgs = styled.div`
	display: flex;
	justify-content: space-around;
	width: 50%;
	@media (max-width: 1300px) {
		width: 30%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 50%;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 75%;
	}
	`;

export const LogoOrg = styled(Image)`
	height: 9rem;
	width: auto;
`;

export const Links = styled.div`
grid-area: LK;

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
	@media ${({ theme }) => theme.device.mobileL} {
		li {
			font-size: 2.5rem;
		}
	}
`;

export const Contact = styled.div`
grid-area: CT;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-end;
	
	@media (max-width: 1300px) {
		align-items: center;
	}
`;

export const ContactLink = styled(Link)`
	font-size: 2.6rem;
	font-weight: 500;
	text-decoration: none;
	color: ${(props) => props.theme.colors.white};
	align-items: center;
	display: flex;
	gap: 1rem;

	@media ${({ theme }) => theme.device.mobileL} {	
		font-size: 2rem;
}
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
	@media ${({ theme }) => theme.device.mobileL} {
		
		font-size: 1.6rem;
		
	}
`;
