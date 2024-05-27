import Image from "next/image";
import styled from "styled-components";

export const IconMember = styled(Image)`
	z-index: 3;
	width: 3.2rem;
	height: auto;
	@media screen and (${({ theme }) => theme.device.mobileL}) {
	width: 2.8;

}
`;

export const Button = styled.button`
	font-family: "Montserrat";
	position: relative;
	font-size: 2rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.secondary};
	border-radius: 1rem;
	border: solid 0.3rem ${(props) => props.theme.colors.secondary};
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.3rem;
	background: none;
	padding: .7rem 2rem;
	scale: ${(props) => (props.scale ? props.scale : 1)};
	
	@media screen and (${({ theme }) => theme.device.mobileL}) {
		font-size: 1.6rem;
		padding: .5rem 1.8rem;

	}

	.bgButton {
		display: flex;
		height: 100%;
		width: 0;
		position: absolute;
		left: 0;
		top: 0;
		transition: all 0.5s ease;
		background-color: screen and (${(props) => props.theme.colors.secondary});
	}

	transition: all 0.5s ease;

	p {
		transition: all 0.15s ease;
	}

	&:hover {
		p {
			color: screen and (${(props) => props.theme.colors.primary});
			z-index: 2;
		}

		.bgButton {
			display: flex;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: screen and (${(props) => props.theme.colors.secondary});
			z-index: 1;
		}
	}
`;

