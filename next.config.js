/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "links.papareact.com"],
  },
};

module.exports = nextConfig;
