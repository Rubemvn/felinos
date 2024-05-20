import Link from "next/link";
import {
	Contact,
	ContactLink,
	Container,
	Content,
	DevelopedBy,
	Links,
	LogoFelinos,
	LogoOrg,
	LogoOrgs,
	LogoUnidade,
	Logos,
	Unidades,
} from "./styles";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

import felinos from "@/public/images/images/FELINOS.svg";
import gatas from "@/public/images/images/Gatas-logo.png";
import panteraN from "@/public/images/images/Pantera-Negra-logo.png";
import tigresa from "@/public/images/images/Tigresa-logo.png";
import jaguar from "@/public/images/images/Jaguar-logo.png";
import iasd from "@/public/images/images/iasd.svg";
import dbv from "@/public/images/images/D1.png";
import MemberButton from "../MemberButton/MemberButton";

const Footer = () => {
	return (
		<Container id='footer'>
			<Content>
				<Logos>
					<LogoFelinos
						alt='Logo do clube de Desbravadores Felinos'
						src={felinos}
					/>

					<Unidades>
						<LogoUnidade
							alt='Logo da unidade gatas'
							src={gatas}
						/>
						<LogoUnidade
							alt='Logo da unidade pantera negra'
							src={panteraN}
						/>
						<LogoUnidade
							alt='Logo da unidade tigresa'
							src={tigresa}
						/>
						<LogoUnidade
							alt='Logo da unidade jaguar'
							src={jaguar}
						/>
					</Unidades>

					<LogoOrgs>
						<LogoOrg
							alt='Logo da Igreja Adventista do Sétimo Dia'
							src={iasd}
						/>
						<LogoOrg
							alt='Logo D1 dos Desbravadores'
							src={dbv}
						/>
					</LogoOrgs>
				</Logos>

				<Links>
					<ul>
						<li>
							<Link href='#home'>Home</Link>
						</li>
						<li>
							<Link href='#aboutUs'>Quem Somos?</Link>
						</li>
						<li>
							<Link href='#contact'>Contate-nos</Link>
						</li>
						<li>
							<Link href='#member'>
								<MemberButton text='SEJA SÓCIO' />{" "}
							</Link>
						</li>
					</ul>
				</Links>

				<Contact id='contact'>
					<ContactLink
						href=''
						target='_blank'>
						Nossa localização <FaLocationDot />
					</ContactLink>
					<ContactLink
						href=''
						target='_blank'>
						felinos.mpi@gmail.com <IoIosMail />
					</ContactLink>
					<ContactLink
						href=''
						target='_blank'>
						86 99933-2609 <IoLogoWhatsapp />
					</ContactLink>
					<ContactLink
						href=''
						target='_blank'>
						@felinos.dbv <IoLogoInstagram />
					</ContactLink>
					<ContactLink
						href=''
						target='_blank'>
						Clube Felinos <IoLogoFacebook />
					</ContactLink>
				</Contact>
			</Content>

			<DevelopedBy>
				<p>
					Desenvolvido por{" "}
					<Link
						href='https://rubemvn.github.io/'
						target='_blank'>
						Rúbem Vieira
					</Link>
				</p>
			</DevelopedBy>
		</Container>
	);
};

export default Footer;
