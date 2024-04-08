/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;

// module.exports = {
//   webpackDevMiddleware: config => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     }
//     return config
//   },
// }