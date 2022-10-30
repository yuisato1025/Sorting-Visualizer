/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true, // INFO: https://nextjs.org/docs/api-reference/next/image#unoptimized
	},
};

module.exports = nextConfig;
