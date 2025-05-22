/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure output for Vercel deployment
  output: "standalone",
  
  // Enable image optimization
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  
  // Configure redirects
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
