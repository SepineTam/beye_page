// next.config.js
/** @type {import('next.config').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // 支持Cloudflare Pages部署
    output: 'standalone',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // 移除重定向配置，因为已在页面组件中处理
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/zh',
    //             permanent: false,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
