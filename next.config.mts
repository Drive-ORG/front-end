/* eslint-disable require-await */
import { NextConfig } from 'next';

const { NEXT_PUBLIC_BASE_URL } = process.env;

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL
  }
};

module.exports = nextConfig;
