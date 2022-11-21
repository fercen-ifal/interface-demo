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
			},
		},
	},
	plugins: [],
};
