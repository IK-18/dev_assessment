import type {Config} from "tailwindcss";
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xldesktop: "1920px",
			desktop: "1280px",
			laptop: "1024px",
			tablet: "720px",
			phone: "360px",
		},
		extend: {
			colors: {
				"black-1": "var(--black-1)",
				actiongreen: "var(--actiongreen)",
				"black-10": "var(--black-10)",
				actionred: "var(--actionred)",
				"black-100": "var(--black-100)",
				"black-2": "var(--black-2)",
				"black-4": "var(--black-4)",
				"black-20": "var(--black-20)",
				"black-30": "var(--black-30)",
				"black-40": "var(--black-40)",
				"black-60": "var(--black-60)",
				"black-80": "var(--black-80)",
				"black-90": "var(--black-90)",
				grey: "var(--grey)",
				"main-background": "var(--main-background)",
				primary: "var(--primary)",
				"primary-100": "var(--primary-100)",
				"primary-20": "var(--primary-20)",
				"primary-30": "var(--primary-30)",
				"secondary-100": "var(--secondary-100)",
				"secondary-20": "var(--secondary-20)",
				"secondary-30": "var(--secondary-30)",
				"secondary-50": "var(--secondary-50)",
				stroke: "var(--stroke)",
				white: "var(--white)",
			},
			fontFamily: {
				"input-placeholder": "var(--input-placeholder-font-family)",
				"label-1-medium": "var(--label-1-medium-font-family)",
				"label-1-regular": "var(--label-1-regular-font-family)",
				"paragraph-1-medium": "var(--paragraph-1-medium-font-family)",
				"paragraph-1-regular": "var(--paragraph-1-regular-font-family)",
				"paragraph-2-medium": "var(--paragraph-2-medium-font-family)",
				"paragraph-2-regular": "var(--paragraph-2-regular-font-family)",
				"subheading-3-medium": "var(--subheading-3-medium-font-family)",
			},
		},
	},
	plugins: [
		plugin(function ({addUtilities}) {
			addUtilities({
				".no-scrollbar::-webkit-scrollbar": {
					"background-color": "transparent",
					width: "0.4vw",
					height: "0",
				},
				".no-scrollbar::-webkit-scrollbar-thumb": {
					"background-color": "rgb(140, 140, 140)",
					border: "0.15vw solid transparent",
					"border-radius": "1vw",
					"background-clip": "content-box",
				},
				".no-scrollbar::-webkit-scrollbar-track": {
					"background-color": "transparent",
					"border-radius": "1vw",
				},
				".no-scrollbar::-webkit-scrollbar-thumb:hover": {
					"background-color": "rgb(100, 100, 100)",
				},
				".date-picker::-webkit-calendar-picker-indicator": {
					width: "100%",
					opacity: "0",
				},
			});
		}),
	],
} satisfies Config;
