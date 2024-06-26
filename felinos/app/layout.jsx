// import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import GlobalStyles from "@/styles/GlobalStyles";

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

			<body
			// className={montserrat.className}
			>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
