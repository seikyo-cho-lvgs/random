/** @type {import('next').NextConfig} */
const webpack = require('webpack')
require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/random' },
    }
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  },
}

module.exports = nextConfig
