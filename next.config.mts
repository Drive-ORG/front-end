/* eslint-disable require-await */
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; img-src 'self'; media-src 'self'; script-src 'self'`
          }
        ],
        source: '/(.*)'
      }
    ];
  }
};

module.exports = nextConfig;
