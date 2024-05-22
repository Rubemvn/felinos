const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

const device = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(max-width: ${size.desktop})`,
};

export default {
	colors: {
		primary: "#0B1447",
		secondary: "#F37C09",
		tertiary: "#4762FB",
		quartiary: "#616161",

		white: "#fff",
		black: "#000",
		gray: "#bfbfbf",
		graySecondary: "#313131",

		gold01: "#F0A81D",
		gold02: "#6B4700",

		goldPlus01: "#14F15F",
		goldPlus02: "#005A1F",

		platinum01: "#FFFFFF",
		platinum02: "#393939",
		platinum03: "#CECECE",

		black01: "#141414",

		info: "#060E3D",
		textInfo: "#343B65",
	},

	device,
};
