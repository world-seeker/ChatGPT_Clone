/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
            port: '',
            pathname: '/2i6',
          },
        ],
      },
}

module.exports = nextConfig
