/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'exp.cdn-hotels.com',
      'media-cdn.tripadvisor.com',
      'cdn.sanity.io',
    ],
  },
};

module.exports = nextConfig;
