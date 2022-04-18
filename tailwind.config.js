module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			logo: ['Pacifico', 'sans-serif'],
			text: ['Poppins', 'sans-serif'],
			button: ['Rubik', 'sans-serif'],
		},
		extend: {
			colors: {
				green: '#66D9C4',
				Lightblue: '#25ddf5',
				blue: '#0855bf',
			},
		},
	},
	plugins: [],
};
