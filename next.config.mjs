/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "http", hostname: "127.0.0.1" }],
    domains: [
      "images.unsplash.com",
      "deserving-idea-0f81c30e1c.media.strapiapp.com",
    ],
  },
};

export default nextConfig;
