/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/sameera' : '';
const assetPrefix = isProd ? '/sameera/' : '';

const nextConfig = {
  output: 'export',
  assetPrefix,
  basePath,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
