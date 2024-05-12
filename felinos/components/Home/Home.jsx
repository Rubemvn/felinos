import {
	Container,
	Content,
	Texts,
	Button,
	IconMember,
	IconSocialMedia,
	ImageCell,
} from "./styles";
import iconMember from "@/public/images/icons/iconMemberBlue.svg";
import instagram from "@/public/images/icons/instagram icon.svg";
import facebook from "@/public/images/icons/facebook icon.svg";

const Home = () => {
	return (
		<section id='home'>
			<Container>
				<Content>
					<Texts>
						<h1>Olá, Somos o Clube de Desbravadores Felinos</h1>
						<p>
							Desde de 2001 salvando crianças e adolescentes do pecado e
							guiando-as no serviço a Deus e a comunidade. Nossa missão é
							espalhar a mensagem do advento a todo o mundo em noss geração!
						</p>
						<div>
							<Button>
								SEJA SÓCIO{" "}
								<IconMember
									src={iconMember}
									alt='icone de carteira'
								/>
							</Button>
							<IconSocialMedia
								src={instagram}
								alt='Logo tipo do instagram'
							/>
							<IconSocialMedia
								src={facebook}
								alt='Logo tipo do facebook'
							/>
						</div>
					</Texts>
					<ImageCell
						// src={}
						alt='2 Celulares. O primeiro com imagem do Instagram do clube de debravadores e o outro com a logo marca do clube'></ImageCell>
				</Content>
			</Container>
		</section>
	);
};

export default Home;
