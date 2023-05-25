/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    //외부 이미지 사용 설정
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
