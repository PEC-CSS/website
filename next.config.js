/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    disable: prod ? false : true,
    skipWaiting: true,
});

const headers = async () => {
    return [
        {
            source: "/(.*)",
            headers: [
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
                {
                    key: "X-Frame-Options",
                    value: "SAMEORIGIN",
                },
                {
                    key: "X-XSS-Protection",
                    value: "1; mode=block",
                },
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                {
                    key: "Access-Control-Allow-Methods",
                    value: "GET,DELETE,PATCH,POST,PUT",
                },
                {
                    key: "Access-Control-Allow-Headers",
                    value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Authorization, Date, X-Api-Version",
                },
            ],
        },
    ];
};

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: {
            ssr: false,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    env: {
        BACKEND: process.env.BACKEND,
    },
    headers,
};

module.exports = withPWA(nextConfig);
