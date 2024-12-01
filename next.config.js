/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname
      },
    ],
    unoptimized: true, // This disables Next.js image optimization
  },
};

module.exports = nextConfig;