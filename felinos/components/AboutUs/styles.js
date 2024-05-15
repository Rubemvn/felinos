import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;
	height: 100vh;
`;

export const Content = styled.div`
	height: 100vh;
	width: 135rem;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h2`
	color: ${(props) => props.theme.colors.white};
	text-align: center;
	font-size: 6.4rem;
`;

export const Boxes = styled.div`
	display: flex;
	width: 100%;
	height: calc(100% - (7.8rem + 6rem));
	box-sizing: border-box;
	position: relative;
`;

export const History = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 73rem;
	height: 50%;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 1.5rem;
	padding: 0 2.4rem 2.4rem 0;
`;

export const TextSection = styled.div`
	color: ${(props) => props.theme.colors.white};
	padding: 2.5rem;
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	flex-direction: column;
	gap: 1rem;

	.title {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	h3 {
		font-size: 3.5rem;
		font-weight: 700;
	}

	p {
		font-size: 2.4rem;
		font-weight: 500;
		text-align: justify;
	}
`;

export const ImageCarousel = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 64.6rem;
	height: 38.5rem;
	margin-top: 0.8rem;
	padding-bottom: 2rem;

	background-color: ${(props) => props.theme.colors.white};
	border-radius: 1.5rem;

	img {
		height: 34rem;
		width: auto;
	}

	.left,
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem;
		background: none;
		border: none;
		font-size: 7rem;

		transition: all 0.3s ease;

		img {
			height: 3.6rem;
			width: auto;
		}
		margin: 0 0.5rem;
	}

	.left {
		&:hover {
			transform: translateX(-1rem);
			margin: 0;
		}
	}
	.right {
		&:hover {
			transform: translateX(1rem);
			margin: 0;
		}
	}
`;

export const WhatWeDo = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 119rem;
	height: 51%;

	background-color: ${(props) => props.theme.colors.tertiary};
	border-radius: 1.5rem;
	z-index: 3;
`;

export const SubtitlesIcons = styled(Image)`
	width: 4rem;
	height: auto;
`;
