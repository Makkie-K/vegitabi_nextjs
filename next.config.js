// module.exports = {
//   reactStrictMode: true,
// };

module.exports = {
  webpack: (config, options) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    return config;
  },
};
