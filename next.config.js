/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-www.louvre.fr",
        port: "",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "https",
        hostname: "www.musee-delacroix.fr",
        port: "",
        pathname: "/IMG/**",
      },
      {
        protocol: "https",
        hostname: "collections.louvre.fr",
        port: "",
        pathname: "/media/cache/small/**",
      },
    ],
  },
};

module.exports = nextConfig;
