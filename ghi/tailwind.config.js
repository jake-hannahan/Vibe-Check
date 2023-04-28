/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				oswald: ["Oswald", "sans-serif"],
				megrim: ["Megrim", "sans-serif"],
			},
		},
	},
	plugins: [],
};
