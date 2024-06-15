module.exports = {
  exportPathMap: async function () {
    // 動的ページを除外するための正規表現パターン
    const dynamicPagesToExclude = [
      "/search", // 除外したい動的ページのパスを指定
    ];

    // パスマップを生成する関数
    const generatePathMap = () => {
      const pathMap = {
        // ここに静的ページをマッピングするロジックを書く
      };

      // 動的ページを除外
      dynamicPagesToExclude.forEach((page) => {
        pathMap[page] = { page: "/404" }; // 例: /search ページを /404 にマップ
      });

      return pathMap;
    };

    return generatePathMap();
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

// module.exports = {
//   exportPathMap: async function () {

//     return {
//       // 除外したい動的ページのパスを指定
//       "/search": { page: "/search" }, // 例: /search ページを /404 にマップ
//     };
//   },
//   images: {
//     unoptimized: true,
//   },
//   reactStrictMode: true,
// };
