/** @type {import('postcss-load-config').Config} */
const config = {
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	plugins: {
		tailwindcss: {},
	},
};

export default config;
