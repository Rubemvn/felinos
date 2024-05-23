import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;
	height: 100vh;
	@media ${({ theme }) => theme.device.laptopL} {
		height: auto;
		padding: 2rem 0;
}
`;

export const Content = styled.div`
	height: 100vh;
	width: 80%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media ${({ theme }) => theme.device.laptopL} {
		width: 90%;
		height: auto;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 95%;
	}
`;

export const Title = styled.h2`
	color: ${(props) => props.theme.colors.white};
	text-align: center;
	font-size: 6.4rem;
	
	@media ${({ theme }) => theme.device.laptop} {
		font-size: 5.5rem;
	}		
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 4.5rem;
	}		
	@media ${({ theme }) => theme.device.mobileL} {
		font-size: 4rem;
	}		
`;

export const Boxes = styled.div`
	display: grid;
	width: 100%;
	height: calc(100% - (7.8rem + 6rem));
	box-sizing: border-box;
	position: relative;
	border-radius: 1.5rem;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas:
		"HT IM"
		"WD WD";
		
	@media ${({ theme }) => theme.device.laptop} {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
		grid-template-areas:
			"HT"
			"IM"
			"WD";
	}
`;

export const History = styled.div`
	display: flex;
	grid-area: HT;
	background-color: ${(props) => props.theme.colors.secondary};
`;

export const TextSection = styled.div`
	color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;

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

	@media ${({ theme }) => theme.device.laptopL} {
		h3{
			font-size: 3rem;
		}

		p{
			font-size: 2rem;
		}
	}
	
	@media ${({ theme }) => theme.device.laptop} {
		h3{
			font-size: 2.6rem;
		}
		
		p{
			font-size: 1.8rem;
		}
		
	}
`;

export const ImageCarousel = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	grid-area: IM;
	padding: 1.5rem;

	background-color: ${(props) => props.theme.colors.white};

	.imgFelinos {
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
	
	@media ${({ theme }) => theme.device.laptopL} {
		.imgFelinos {
			height: 95%;
			width: 100%;
		}
	}
	@media ${({ theme }) => theme.device.laptop} {
		
		.imgFelinos {
			/* height: 20rem; */
		}
		.left,
		.right {
		padding: 1rem 0;

			img{
				height: 3rem;
			}
		}
	}
	
	@media ${({ theme }) => theme.device.mobileL} {
		.imgFelinos {
			height: 20rem;
			width: auto;
		}
		.left,
		.right {
			img{
				height: 2.5rem;
			}
		}
	}
	@media ${({ theme }) => theme.device.mobileM} {
		.imgFelinos {
			height: 17rem;
		}
	}
	@media ${({ theme }) => theme.device.mobileM} {
		.imgFelinos {
			height: 15rem;
		}
	}

	`;

export const WhatWeDo = styled.div`
	grid-area: WD;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	
	background-color: ${(props) => props.theme.colors.tertiary};
	z-index: 3;

	@media ${({ theme }) => theme.device.tablet}{
		grid-template-columns: repeat(1, 2fr);
		
	}
	`;

export const SubtitlesIcons = styled(Image)`
	width: 4rem;
	height: auto;
	@media ${({ theme }) => theme.device.laptopL}{
		width: 3.5rem;
	}
	@media ${({ theme }) => theme.device.laptop}{
		width: 3.2rem;
	}
	@media ${({ theme }) => theme.device.tablet}{
		width: 3.0rem;
	}

`;
