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
import cellPhones from "@/public/images/images/CELULARES.png";
import Link from "next/link";

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
							espalhar a mensagem do advento em todo o mundo em nossa geração!
						</p>
						<div>
							<Link href='#member'>
								<Button>
									SEJA SÓCIO
									<IconMember
										src={iconMember}
										alt='icone de carteira'
									/>
								</Button>
							</Link>
							<Link
								href='https://www.instagram.com/felinos.dbv'
								target='_blank'>
								<IconSocialMedia
									src={instagram}
									alt='Logo tipo do instagram'
								/>
							</Link>
							<Link
								href='https://www.instagram.com/felinos.dbv'
								target='_blank'>
								<IconSocialMedia
									src={facebook}
									alt='Logo tipo do facebook'
								/>
							</Link>
						</div>
					</Texts>
					<ImageCell
						src={cellPhones}
						alt='2 Celulares. O primeiro com imagem do Instagram do clube de debravadores e o outro com a logo marca do clube'></ImageCell>
				</Content>
			</Container>
		</section>
	);
};

export default Home;
