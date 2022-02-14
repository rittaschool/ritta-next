/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/react',
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
});
