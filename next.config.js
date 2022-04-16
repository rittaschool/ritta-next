/** @type {import('next').NextConfig} */
const nextBuildId = require('next-build-id');

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },

  webpack: (config, { buildId, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_ID: JSON.stringify(buildId),
        },
      })
    );

    return config;
  },
};
