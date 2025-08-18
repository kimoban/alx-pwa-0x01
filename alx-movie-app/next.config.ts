
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  // manifest option is not supported by next-pwa, manifest.json will be picked up automatically if placed in public/
  // runtimeCaching is not a supported option in next-pwa v10+ (handled automatically or via custom sw),
  // buildExcludes is not a supported option in next-pwa v10+ (handled automatically or via custom sw),
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'm.media-amazon.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ] as import('next/dist/shared/lib/image-config').RemotePattern[],
  },
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
};

export default withPWA({
  ...nextConfig
});
