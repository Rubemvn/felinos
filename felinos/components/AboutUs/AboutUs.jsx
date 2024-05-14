import {
	Container,
	Content,
	Title,
	Boxes,
	History,
	TextSection,
	ImageCarousel,
	WhatWeDo,
	SubtitlesIcons,
} from "./styles";

import arrowLeft from "@/public/images/icons/arrowLeft.svg";
import arrowRight from "@/public/images/icons/arrowRight.svg";
import photoClub from "@/public/images/images/clubFelinos.png";
import target from "@/public/images/icons/iconTarget.png";
import tissue from "@/public/images/icons/iconTissue.png";
import book from "@/public/images/icons/iconBook.png";
import Image from "next/image";

const AboutUs = () => {
	console.log(Title);
	return (
		<Container id='aboutUS'>
			<Content>
				<Title>Quem Somos nós?</Title>
				<Boxes>
					<History>
						<TextSection>
							<div className='title'>
								<SubtitlesIcons
									src={book}
									alt='Icone de Livro aberto'
								/>
								<h3>Resumo da nossa História</h3>
							</div>
							<p>
								A Jornada do clube Felinos já dura duas décadas, o Clube de
								Desbravadores Felinos nasceu com um sonho audacioso: impactar
								vidas e formar líderes. Ao longo dos anos enfrentamos desafios,
								participamos de aventuras emocionantes e vimos muitos deixarem
								sua marca. Nosso objetivo “Salvar do pecado e guiar no serviço”
								nos guia, e nosso compromisso com Deus e com a comunidade
								permanece firme.
							</p>
						</TextSection>
					</History>

					<ImageCarousel>
						<button className='left'>
							<Image src={arrowLeft} />
						</button>
						<Image src={photoClub} />
						<button className='right'>
							<Image src={arrowRight} />
						</button>
					</ImageCarousel>

					<WhatWeDo>
						<TextSection>
							<div className='title'>
								<SubtitlesIcons
									src={tissue}
									alt='Icone de lenço'
								/>
								<h3>O papel do Clube</h3>
							</div>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting.
							</p>
						</TextSection>
						<TextSection>
							<div className='title'>
								<SubtitlesIcons
									src={target}
									alt='Icone de alvo'
								/>
								<h3>Nossa Missão</h3>
							</div>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting.
							</p>
						</TextSection>
					</WhatWeDo>
				</Boxes>
			</Content>
		</Container>
	);
};

export default AboutUs;
