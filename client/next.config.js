/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// INFO: https://nextjs.org/docs/api-reference/next/image#unoptimized
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
