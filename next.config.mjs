/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: [
  //     "cdn2.cellphones.com.vn",
  //     "account.cellphones.com.vn",
  //     "res.cloudinary.com",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.cellphones.com.vn",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "account.cellphones.com.vn",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
    domains: ["cdn2.cellphones.com.vn", "dashboard.cellphones.com.vn"],
  },
};

export default nextConfig;
