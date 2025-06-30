import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '/t/p/**', // TMDB에서 사용하는 이미지 경로 패턴
            },
        ],
    },
};

export default nextConfig;
