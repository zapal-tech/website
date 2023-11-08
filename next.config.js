/* eslint-disable @typescript-eslint/no-var-requires */
const pwa = require('next-pwa');

const withPWA = pwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  i18n,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [1680, 1920, 2560, 3840],
    imageSizes: [700, 800, 1200, 1600],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 24,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(process.env.NEXT_PUBLIC_CMS_URL).hostname,
        pathname: '/**',
      },
    ],
  },
  // async headers() {
  //   const ContentSecurityPolicy = `
  //     default-src 'self';
  //     script-src 'self';
  //     child-src example.com;
  //     style-src 'self' example.com;
  //     font-src 'self';
  //   `

  //   return [
  //     {
  //       key: 'Content-Security-Policy',
  //       value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  //     }
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
