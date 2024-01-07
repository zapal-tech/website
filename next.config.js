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
    contentDispositionType: 'attachment',
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
  async rewrites() {
    return [
      {
        source: '/.well-known/matrix/:path*',
        destination: 'https://matrix.zapal.tech/.well-known/matrix/:path*',
      },
      {
        source: '/_matrix/client/:path*',
        destination: 'https://matrix.zapal.tech/_matrix/client/:path*',
      },
    ];
  },
  async headers() {
    const ContentSecurityPolicy = `
      default-src 'self';
      style-src 'self' 'unsafe-inline';
      script-src 'self' 'report-sample' ${
        process.env.NODE_ENV === 'development' ? "'unsafe-eval' " : ''
      }https://api.mapbox.com https://connect.facebook.net https://va.vercel-scripts.com https://vitals.vercel-insights.com;
      img-src 'self' data: ${process.env.NEXT_PUBLIC_CMS_URL};
      font-src 'self';
      object-src 'none';
      child-src 'self';
      frame-src 'self' calendly.com;
      frame-ancestors 'self' ${process.env.NEXT_PUBLIC_CMS_URL};
      connect-src 'self' *.mapbox.com ${
        process.env.NEXT_PUBLIC_CMS_URL
      } https://connect.facebook.net https://va.vercel-scripts.com https://vitals.vercel-insights.com;
      manifest-src 'self';
      base-uri 'self';
      form-action 'self';
      media-src 'self';
      worker-src 'self' blob:;
      block-all-mixed-content;
      upgrade-insecure-requests;
    `;

    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
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
