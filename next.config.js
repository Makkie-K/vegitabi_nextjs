module.exports = {
  exportPathMap: async function () {
    return {
      // 除外したい動的ページのパスを指定
      "/search": { page: "/search" }, // 例: /search ページを /404 にマップ
    };
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};
