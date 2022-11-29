/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,svelte,js,ts}"],
	theme: {
		extend: {
			colors: {
				primary: {
					main: "#9FE3BA",
					dark: "#2DCE8A",
					darker: "#1EB575",
				},
				alt: {
					googleRed: "#DB4C3F",
					microsoftBlue: "#2C75E9",
				},
			},
		},
	},
	plugins: [],
};
