import Image from "next/image";
import {
	Container,
	Content,
	Feedback,
	FeedbacksContent,
	Profile,
	TextContent,
	Title,
} from "./styles";
import profile from "@/public/images/images/profile 1.png";

const TheClub = () => {
	return (
		<Container id='theClub'>
			<Title>
				NÃO SE CONSTRÓI UM
				<br />
				GRANDE <b>CLUBE</b> SOZINHO
			</Title>
			<Content>
				<TextContent>
					<p>
						Presente em mais de 160 países, o Clube de Desbravadores trabalha
						com meninos e meninas com idades entre 10 e 15 anos, de diferentes
						classes sociais, raças, religião. Reúnem-se, em geral, uma vez por
						semana para aprender a desenvolver talentos, habilidades, percepções
						e o gosto pela natureza.
						<br />
						<br />O Programa Sócio Desbravador é um programa destinado aos
						apoiadores e amantes deste ministério que transforma diariamente a
						vida de muitas crianças. Com a sua ajuda vamos construir um clube
						mais forte, inclusivo, atuante e relevante na sociedade. Escolha um
						dos nossos planos e junte-se a nós!
					</p>
				</TextContent>
				<FeedbacksContent>
					<Feedback>
						<div className='title'>
							<Profile
								src={profile}
								alt='Perfil'
							/>
							<div className='texts'>
								<p>Rúbem Vieira</p>
								<small>Desbravador desde 2012</small>
							</div>
						</div>
						<div className='feedbackText one'>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</p>
						</div>
					</Feedback>
					<Feedback>
						<div className='title'>
							<Profile
								src={profile}
								alt='Perfil'
							/>
							<div className='texts'>
								<p>Rúbem Vieira</p>
								<small>Desbravador desde 2012</small>
							</div>
						</div>
						<div className='feedbackText two'>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</p>
						</div>
					</Feedback>
					<Feedback>
						<div className='title'>
							<Profile
								src={profile}
								alt='Perfil'
							/>
							<div className='texts'>
								<p>Rúbem Vieira</p>
								<small>Desbravador desde 2012</small>
							</div>
						</div>
						<div className='feedbackText three'>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s.
							</p>
						</div>
					</Feedback>
				</FeedbacksContent>
			</Content>
		</Container>
	);
};

export default TheClub;
