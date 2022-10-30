/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: "/Sorting-Visualizer",
	assetPrefix: "/Sorting-Visualizer",
	images: {
		unoptimized: true, // INFO: https://nextjs.org/docs/api-reference/next/image#unoptimized
	},
};

module.exports = nextConfig;
