/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		'./src/app/**/*.{js,jsx,ts,tsx}',
		'./src/screens/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			fontFamily: {
				// Jakarta: ['Jakarta', 'sans-serif'],
				// JakartaBold: ['Jakarta-Bold', 'sans-serif'],
				// JakartaExtraBold: ['Jakarta-ExtraBold', 'sans-serif'],
				// JakartaExtraLight: ['Jakarta-ExtraLight', 'sans-serif'],
				// JakartaLight: ['Jakarta-Light', 'sans-serif'],
				// JakartaMedium: ['Jakarta-Medium', 'sans-serif'],
				// JakartaSemiBold: ['Jakarta-SemiBold', 'sans-serif'],
			},
			colors: {
				primary: {
					100: '#C3D9FF',
					200: '#9BBFFF',
					300: '#0286FF',
					400: '#6A85E6',
					500: '#475A99',
					600: '#364573',
					700: '#242B4D',
				},
				light: {
					100: '#F8F8F8',
					200: '#EBEBEB',
					300: '#D9D9D9',
					400: '#C2C2C2',
				},
				dark: {
					100: '#AAAAAA',
					200: '#999999',
					300: '#858585',
					400: '#666666',
					500: '#4D4D4D',
					600: '#333333',
					700: '#2A2A2A',
					800: '#202020',
					900: '#080808',
				},
				success: {
					100: '#C6F6D5',
					200: '#9AE6B4',
					300: '#68D391',
					400: '#38A169',
					500: '#2F855A',
					600: '#276749',
					700: '#22543D',
					800: '#1C4532',
				},
				danger: {
					100: '#FED7D7',
					200: '#FEB2B2',
					300: '#FC8181',
					400: '#F56565',
					500: '#E53E3E',
					600: '#C53030',
					700: '#9B2C2C',
					800: '#742A2A',
				},
				warning: {
					100: '#FEF3C7',
					200: '#FDE68A',
					300: '#FACC15',
					400: '#EAB308',
					500: '#CA8A04',
					600: '#A16207',
					700: '#854D0E',
					800: '#713F12',
				},
			},
		},
	},
	plugins: [],
};
