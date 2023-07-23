/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
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
    headers,
};

module.exports = withPWA(nextConfig);
