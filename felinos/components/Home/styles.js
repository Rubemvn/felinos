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
	height: 60rem;
	width: auto;
`;
