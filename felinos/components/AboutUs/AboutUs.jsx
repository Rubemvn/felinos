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
								Nossa jornada já dura duas décadas! O Clube de Desbravadores
								Felinos nasceu com um sonho audacioso: impactar vidas e formar
								líderes. Ao longo dos anos enfrentamos desafios, participamos de
								aventuras emocionantes e vimos muitos deixarem sua marca. Nosso
								objetivo “Salvar do pecado e guiar no serviço” nos guia e nosso
								compromisso com Deus e com a comunidade permanece firme.
							</p>
						</TextSection>
					</History>

					<ImageCarousel>
						<button className='left'>
							<Image src={arrowLeft} />
						</button>
						<Image
							className='imgFelinos'
							src={photoClub}
						/>
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
								O clube de desbravadores desempenha um papel fundamental na vida
								das crianças, adolescentes e na comunidade. Oferece um ambiente
								seguro e educativo, onde habilidades sociais, físicas, mentais e
								espirituais são desenvolvidas. Prepara os membros para uma vida
								de propósito, responsabilidade e liderança, ensinando-os a serem
								resilientes e comprometidos com Deus e com o bem-estar da
								sociedade.
							</p>{" "}
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
								O Clube de Desbravadores busca criar um ambiente seguro e
								acolhedor, onde jovens possam explorar talentos, superar
								desafios e construir amizades. Com um programa dinâmico e
								diversificado, que inclui acampamentos, caminhadas, competições,
								oficinas e estudos bíblicos, o Clube visa fortalecer a fé, o
								caráter e a cidadania dos membros. Nossa missão é inspirar
								desbravadores a seguir um estilo de vida ativo, altruísta e
								centrado em valores éticos e espirituais, contribuindo para um
								mundo melhor.
							</p>
						</TextSection>
					</WhatWeDo>
				</Boxes>
			</Content>
		</Container>
	);
};

export default AboutUs;
