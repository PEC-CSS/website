/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    disable: prod ? false : true,
    skipWaiting: true
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
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
    env: {
        BACKEND: process.env.BACKEND,
    },
    headers,
};

module.exports = withPWA(nextConfig);
