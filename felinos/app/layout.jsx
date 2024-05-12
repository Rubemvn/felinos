import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import GlobalStyles from "@/styles/GlobalStyles";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "Clube de Desbravadores Felinos",
	description:
		"Somos o clube de desbravadores Felinos. Nosso objetivo é salvar crianças e adolescentes de 10 a 15 anos do pecado e guia-las no serviço a Deus e a comunidade.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-br'>
			<GlobalStyles />
			<body className={montserrat.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
