/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				screens: {
					xs: '375px',
					sm: '576px',
					md: '768px',
					lg: '992px',
					xl: '1281px',
					xxl: '1570px',
				},
			},
			colors: {
				primary: {
					DEFAULT: '#00C2BE',
					dull: '#00C2BE',
					dark: '#00A7A4',
				},
				gray: {
					DEFAULT: '#5F5F5F',
					pale: '#EFEFEF',
					light: '#8E8E93',
					dark: '#5F5F5F',
				},
				red: {
					DEFAULT: '#E0434D',
					500: '#E83939',
				},
				green: {
					DEFAULT: '#6EE47A',
					dark: '#025B6F',
					500: '#6EE47A',
				},
				blue: {
					white: '#EDF3F4',
				},
				neutral: {
					dark: {
						DEFAULT: '#000000',
						100: '#1D2125',
						300: '#2C333A',
						500: '#596773',
						900: '#B6C2CF',
					},
					DEFAULT: '#FFFFFF',
					100: '#F7F8F9',
					200: '#F1F2F4',
					300: '#DCDFE4',
					500: '#8590A2',
					400: '#B3B9C4',
					600: '#738496',
				},
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [],
};
