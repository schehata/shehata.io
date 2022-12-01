/** @type {import('next').NextConfig} */

const { withAxiom } = require('next-axiom')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
};


module.exports = withAxiom(nextConfig);
