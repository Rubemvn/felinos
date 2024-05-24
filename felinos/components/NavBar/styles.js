"use client";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

export const Container = styled.header`
	color: white;
	font-size: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
`;

export const Bar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	max-width: 158rem;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 90%;
	}
`;

export const Logo = styled(Image)`
	height: 10rem;
	width: auto;
	padding: 1rem 0;
`;

export const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5.2rem;
	li {
		list-style: none;
		font-size: 2rem;
	}

	@media ${({ theme }) => theme.device.laptop} {
		display: ${({ display }) => (display ? "flex" : "none")};
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(5px);
		gap: 0;
		overflow: hidden;
		/* backdrop-filter: ; */
		z-index: 1;

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 60%;
			padding: 3rem 0;
			text-align: center;

			a {
				display: flex;
				text-align: center;
				justify-content: center;
				width: 100%;
				scale: 1.2;
			}
		}
	}
`;

export const LinkBar = styled(Link)`
	color: ${(props) => props.theme.colors.primary};
	text-decoration: none;
	display: flex;
	font-weight: 700;

	@media ${({ theme }) => theme.device.laptop} {
	}
`;

export const MenuHamburger = styled.div`
	display: none;
	align-items: center;

	.line1 {
		width: 100%;
	}
	.line2 {
		width: 100%;
		/* transition: width 0.9s linear; */
	}
	.line1,
	.line2 {
		height: 0.6rem;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.colors.primary};
	}

	@media ${({ theme }) => theme.device.laptop} {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		width: 6rem;
		height: 5rem;
		z-index: 3;
		.line2 {
			transition: transform 0.5s cubic-bezier(0.04, 0.23, 0.11, 0.9);
			transform-origin: center;
			transform: rotate(${({ isOpen }) => (isOpen ? "-45deg" : "none")})
				translateY(${({ isOpen }) => (isOpen ? "-17.5px" : "0px")});
		}
		.line1 {
			transition: transform 0.5s cubic-bezier(0.04, 0.23, 0.11, 0.9);
			transform-origin: center;
			transform: rotate(${({ isOpen }) => (isOpen ? "45deg" : "none")})
				translateY(${({ isOpen }) => (isOpen ? "17.5px" : "0px")});
		}
	}
`;
