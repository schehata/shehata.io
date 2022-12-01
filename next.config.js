/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
};


module.exports = nextConfig