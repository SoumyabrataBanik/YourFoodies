/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vltasuojbirpwazivnuz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
