/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "/u/**",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
