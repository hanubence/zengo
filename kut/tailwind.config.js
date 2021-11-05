module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
				zold: {
					base: "#62c6b2",
					"base-d": "#3D9382",
					"base-dd": "#368676",
				},
				teal: {
					800: "#00695c",
					900: "#004d40",
					"accent-100": "#a7ffeb",
					"accent-200": "#64ffda",
					"accent-400": "#1de9b6",
					"accent-700": "#00bfa5",
				},
				gray: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#eeeeee",
					300: "#e0e0e0",
					400: "#bdbdbd",
					500: "#9e9e9e",
					600: "#757575",
					700: "#616161",
					800: "#424242",
					900: "#212121",
				},
		},
		fontSize: {
			'2xs': '.5rem',
			'3xs': '.35rem'
		},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

