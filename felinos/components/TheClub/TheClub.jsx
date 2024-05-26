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
import profile1 from "@/public/images/images/profile1.png";
import profile2 from "@/public/images/images/profile2.png";
import profile3 from "@/public/images/images/profile3.png";

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
								src={profile1}
								alt='Perfil'
							/>
							<div className='texts'>
								<p>Gerlane Barbosa</p>
								<small>Mãe de desbravadoras</small>
							</div>
						</div>
						<div className='feedbackText one'>
							<p>
								"...O Clube tem uma enorme influência na vida das minhas filhas.
								Se tem um compromisso que elas levam a sério é ir para o Clube
								de Desbravadores (Felinos). O Clube ajuda tanto na vida terrena
								como na eterna e é um importante aliado no relacionamento com os
								pais..."
							</p>
						</div>
					</Feedback>
					<Feedback>
						<div className='title'>
							<Profile
								src={profile2}
								alt='Perfil'
							/>
							<div className='texts'>
								<p>Ana Maria</p>
								<small>Desbravadora desde 2015</small>
							</div>
						</div>
						<div className='feedbackText two'>
							<p>
								"...foi a minha primeira oração, porque o clube falava de oração
								nas meditações, e através disso eu tive uma aproximação maior
								com Deus..."
							</p>
						</div>
					</Feedback>
					<Feedback>
						<div className='title'>
							<Profile
								src={profile3}
								alt='Perfil'
							/>
							<div className='texts'>
								<p>Miguel Arthur</p>
								<small>Desbravador desde 2020</small>
							</div>
						</div>
						<div className='feedbackText three'>
							<p>
								"...No clube, há muitas atividades incríveis, mas minha favorita
								é o campori, porque posso fazer novas amizades..."
							</p>
						</div>
					</Feedback>
				</FeedbacksContent>
			</Content>
		</Container>
	);
};

export default TheClub;
