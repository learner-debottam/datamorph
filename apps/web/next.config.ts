/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/auth/:path*", // any invalid /auth route
        has: [
          {
            type: "query",
            key: "redirect",
            value: "(.*)?",
          },
        ],
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
