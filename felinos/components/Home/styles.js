"use client";
import Image from "next/image";
import styled from "styled-components";

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
`;

export const Button = styled.button``;
export const IconMember = styled(Image)``;
export const IconSocialMedia = styled(Image)``;
export const ImageCell = styled(Image)`
	height: 60rem;
	width: auto;
`;
