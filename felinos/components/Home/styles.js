"use client";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	top: 0;
	width: 100%;

	background-image: url("/images/images/bg-home.jpg");
	background-clip: border-box;
	background-size: cover;
	background-position-y: bottom;
	background-position-x: center;
	background-repeat: no-repeat;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	max-width: 158rem;

	@media ${({ theme }) => theme.device.laptopL} {
		justify-content: space-around;

		width: 90%;
	}

	@media (max-width: 1150px) {
		justify-content: center;
	}

	@media ${({ theme }) => theme.device.laptop} {
		width: 90%;
		justify-content: space-between;
	}

	@media ${({ theme }) => theme.device.tablet} {
		display: flex;
		flex-direction: column-reverse;
		width: 80%;
	}
	@media (max-width: 530px) {
		margin-top: 5%;
	}
	
	@media ${({ theme }) => theme.device.mobileL} {
		width: 100%;
	}
`;

export const Texts = styled.div`
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 4.5rem;
		color: ${(props) => props.theme.colors.primary};
		width: 55rem;
		margin-bottom: 2rem;
	}

	p {
		font-size: 2.4rem;
		font-weight: 500;
		color: ${(props) => props.theme.colors.primary};
		width: 60rem;
		margin-bottom: 2.5rem;
	}

	div {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1.6rem;
	}

	a {
		text-decoration: none;
		transition: all 0.3s ease;

		&:hover {
			scale: 1.04;
		}
	}

	@media ${({ theme }) => theme.device.laptopL} {
		h1 {
			font-size: 4rem;
			width: 50rem;
		}
		p {
			font-size: 2rem;
			width: 50rem;
		}
	}

	@media ${({ theme }) => theme.device.laptop} {
		h1 {
			font-size: 3rem;
			width: 37rem;
		}
		p {
			font-size: 1.6rem;
			width: 37rem;
		}
	}
	@media ${({ theme }) => theme.device.tablet} {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		
		h1 {
			font-size: 4rem;
			width: 50rem;
		}
		p {
			text-align: justify;
			font-size: 2rem;
			width: 50rem;
		}
	}
	
	@media (max-width: 530px) {
		h1 {
			font-size: 3rem;
			width: 40rem;
		}
		p {
			font-size: 1.8rem;
			width: 40rem;
		}
	}

	@media ${({ theme }) => theme.device.mobileL} {
		h1,
		p {
			width: 35rem;
		}

		.links {
			width: 35rem;
		}
	}

	@media ${({ theme }) => theme.device.mobileM} {
		h1{
			font-size: 2.6rem;

		}
		h1,
		p {
			width: 30rem;
		}
		.links {
			display: flex;
			align-items: start;
			flex-direction: column;
			width: 100%;
			padding: 0 1rem;
		}
	}

	@media ${({ theme }) => theme.device.mobileS} {
		h1 {
			width: 100%;
			padding: 0 1rem;
		}
		p {
			font-size: 1.6rem;
			width: 100%;
			padding: 0 1rem;
		}

		#member {
			scale: 0.8rem;
		}
	}
`;

const balance = keyframes`
  
  25%{
      transform: rotate(1deg);
  }
  50%{
		transform: rotate(0deg);
  }
  75%{
		transform: rotate(-1deg);
  }
  100%{
		transform: rotate(0deg);
  }
  
  `;

export const Button = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 26.2rem;
	height: 5.2rem;
	/* gap: 1.8rem; */
	padding: 1.2rem 3rem;
	font-size: 2.4rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.secondary};
	background-color: ${(props) => props.theme.colors.white};
	border: none;
	border-radius: 1rem;

	-webkit-box-shadow: 5px 5px 25px 0px rgba(243, 124, 9, 0.25);
	-moz-box-shadow: 5px 5px 25px 0px rgba(243, 124, 9, 0.25);
	box-shadow: 5px 5px 25px 0px rgba(243, 124, 9, 0.25);

	transition: scale 0.2s ease;

	&:hover {
		animation: ${balance} 0.3s linear infinite;
	}

	&:hover {
		scale: 1.05;
	}
`;

export const IconMember = styled(Image)``;
export const IconSocialMedia = styled(Image)``;

export const ImageCell = styled(Image)`
	width: 60rem;
	height: auto;
	@media ${({ theme }) => theme.device.laptopL} {
		width: 50rem;
	}

	@media ${({ theme }) => theme.device.laptop} {
		width: 35rem;
	}

	@media (max-width: 530px) {
		width: 35rem;
	}
	@media ${({ theme }) => theme.device.mobileL} {
		width: 30rem;
		@media (max-height: 750px) {
			max-width: 30rem;
		}
		@media (max-height: 600px) {
			max-width: 25rem;
		}
		@media (max-height: 530px) {
			/* width: 20rem; */
		}
	}
	@media ${({ theme }) => theme.device.mobileM} {
		padding: 0 2rem;
	}
	@media ${({ theme }) => theme.device.mobileS} {
		padding: 0 2rem;
	}
`;
