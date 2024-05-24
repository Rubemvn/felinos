import Image from "next/image";
import {
	ButtonSign,
	Container,
	Content,
	List,
	Plan,
	Price,
	Title,
} from "./styles";
import wallet from "@/public/images/icons/iconMemberBlue.svg";

import medalGold from "@/public/images/icons/gold.svg";
import medalGoldPlus from "@/public/images/icons/gold+.svg";
import medalPlatinum from "@/public/images/icons/platinum.svg";
import medalBlack from "@/public/images/icons/black.svg";

const Member = () => {
	const handleSign = (url) => {};

	return (
		<Container id='member'>
			<Title>
				<h2>Seja Sócio</h2>{" "}
				<Image
					src={wallet}
					alt='Icone de uma imagem que representa carteira.'
				/>
			</Title>
			<Content>
				<Plan setPlan='gold'>
					<List>
						<h3>GOLD</h3>
						<li>• Certificado</li>
						<li>• Carteirinha</li>
						<li>• Bucket</li>
						<li>• Nescessaire</li>
						<li>• Brindes</li>
					</List>
					<Price setColor='gold'>
						<Image src={medalGold} />
						<div className='price'>
							<h4>R$ 20,00</h4>
							<p>por mês</p>
						</div>
						<ButtonSign
							setColor='gold'
							href='https://chk.eduzz.com/2379172'
							target='_blank'>
							ASSINAR
						</ButtonSign>
					</Price>
				</Plan>

				<Plan setPlan='gold+'>
					<List>
						<h3>GOLD+</h3>
						<li>• Certificado</li>
						<li>• Carteirinha</li>
						<li>• Bucket</li>
						<li>• Nescessaire</li>
						<li>• Caneca</li>
						<li>• Brindes</li>
					</List>
					<Price setColor='gold+'>
						<Image src={medalGoldPlus} />
						<div className='price'>
							<h4>R$ 30,00</h4>
							<p>por mês</p>
						</div>
						<ButtonSign
							setColor='gold+'
							href='https://chk.eduzz.com/2384620'
							target='_blank'>
							ASSINAR
						</ButtonSign>
					</Price>
				</Plan>

				<Plan setPlan='platinum'>
					<List>
						<h3>PLATINUM</h3>
						<li>• Certificado</li>
						<li>• Carteirinha</li>
						<li>• Bucket</li>
						<li>• Nescessaire</li>
						<li>• Caneca</li>
						<li>• Camisa</li>
						<li>• Brindes</li>
						<li>• Desconto de 50% em vendas do clube</li>
					</List>
					<Price setColor='platinum'>
						<Image src={medalPlatinum} />
						<div className='price'>
							<h4>R$ 50,00</h4>
							<p>por mês</p>
						</div>
						<ButtonSign
							setColor='platinum'
							href='https://chk.eduzz.com/2384634'
							target='_blank'>
							ASSINAR
						</ButtonSign>
					</Price>
				</Plan>

				<Plan setPlan='black'>
					<List>
						<h3>BLACK</h3>
						<li>• Certificado</li>
						<li>• Carteirinha</li>
						<li>• Bucket</li>
						<li>• Nescessaire</li>
						<li>• Caneca</li>
						<li>• Camisa</li>
						<li>• Squeeze térmica</li>
						<li>• Chinelo</li>
						<li>• Almofada</li>
						<li>• Brindes</li>
						<li>• Desconto de 50% em vendas do clube</li>
					</List>
					<Price setColor='black'>
						<Image src={medalBlack} />
						<div className='price'>
							<h4>R$ 100,00</h4>
							<p>por mês</p>
						</div>
						<ButtonSign
							setColor='black'
							href='https://chk.eduzz.com/2384657'
							target='_blank'>
							ASSINAR
						</ButtonSign>
					</Price>
				</Plan>
			</Content>
		</Container>
	);
};

export default Member;
