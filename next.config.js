module.exports = {
  siteUrl: "https://vegitabi.com/",
  exportPathMap: async function () {
    return {
      // 除外したい動的ページのパスを指定
      "/search": { page: "/404" }, // 例: /search ページを /404 にマップ
    };
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};
