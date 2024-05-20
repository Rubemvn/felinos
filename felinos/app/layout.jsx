// import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import GlobalStyles from "@/styles/GlobalStyles";
import Head from "next/head";

// const montserrat = Montserrat({
// 	weight: ["400", "500", "600", "700", "800", "900"],
// 	style: ["normal", "italic"],
// 	display: "swap",
// 	subsets: ["latin"],
// });

export const metadata = {
	title: "Clube de Desbravadores Felinos",
	description:
		"Somos o clube de desbravadores Felinos. Nosso objetivo é salvar crianças e adolescentes de 10 a 15 anos do pecado e guia-las no serviço a Deus e a comunidade.",
	icons: {
		icon: ["/images/images/FELINOS.svg"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<GlobalStyles />
			<Head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body
			// className={montserrat.className}
			>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
