/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			screens: {
				xl: 1200,
				"2xl": "1200px",
			},
			padding: "10px",
		},
		extend: {
			fontFamily: {
				main: ["'Poppins', sans-serif"],
				second: ["'DM Sans', sans-serif"],
			},
			colors: {
				blue: "#2F61AF",
				red: "#EF4444",
			},
		},
	},
	plugins: [],
}
