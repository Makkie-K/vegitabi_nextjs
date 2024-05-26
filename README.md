# vegitabi.com

ヴィーガン、ベジタリアンのための旅行情報サイトです。<br/>
店舗情報を、カテゴリーとエリアから記事を検索できるだけでなく、検索フォームから複合キーワードできるようにしました。<br/>
また、レスポンシブに対応し、更にそれぞれのシーンに適したアプローチを採用することで、ユーザーエクスペリエンスを向上させました。<br /><br />

<h3>トップページ<h3>
<p style="font-size: 16px; font-weight: 400">モバイルビューではハンバーガーメニューを使用して検索フォームをスマートに隠しました。これにより、スマートフォンの小さな画面でも検索フォームを幅広く表示でき、使いやすさを向上させました。</p>
<div style="display: flex;">
  <div style="border: 1px solid #ccc; padding: 10px; margin-right: 10px;">
  <p style="text-align: center;">デスクトップビュー</p>
    <img src="https://github.com/Makkie-K/vegitabi_nextjs/assets/50138371/a2feb34d-502c-4b66-8544-ed2b219b2959" width="600" alt="screenshot-top">
  </div>

  <div style="border: 1px solid #ccc; padding: 10px;">
    <p style="text-align: center;">モバイルビュー</p>
    <img src="https://github.com/Makkie-K/vegitabi_nextjs/assets/50138371/238a9fde-d144-4946-9137-fe6d117bc4e7" width="250" alt="screenshot-top">
  </div>
</div>
<h3>個別ページ</h3>
<p style="font-size: 16px; font-weight: 400">デスクトップビューでは画像をカルーセルで表示し、一画面に収めましたが、モバイルビューでは画像を幅いっぱいに大きく表示し、スクロールによる操作を重視しました。</p>
<div style="display: flex;">
  <div style="border: 1px solid #ccc; padding: 10px; margin-right: 10px;">
  <p style="text-align: center;">デスクトップビュー</p>
    <img src="https://github.com/Makkie-K/vegitabi_nextjs/assets/50138371/1d642083-c19f-46a7-bd0f-f86a0d38ddae" width="600" alt="screenshot-top">
  </div>

  <div style="border: 1px solid #ccc; padding: 10px;">
    <p style="text-align: center;">モバイルビュー</p>
    <img src="https://github.com/Makkie-K/vegitabi_nextjs/assets/50138371/20d50555-8631-42f2-b4de-f8137054e0c5" width="250" alt="screenshot-top">
  </div>
</div>

## URL

https://vegitabi.com

## 使用技術

- Next.js
- React
- Material-UI
- HTML
- CSS
- Markdown
- Vercel
- Git

## 機能一覧

- 検索機能
  - マークダウンファイルからのデータ取得および検索を API を通じて実現
- ページネーション
  - Material-UI を利用したページネーションの実装
- カルーセル機能
  - react-responsive-carousel を活用したスムーズなカルーセル体験

## データ取得方法と API 利用方法

このプロジェクトでは、店舗情報データをマークダウンファイルから取得し、それを API を通じて提供しています。以下に、具体的なデータ取得方法と API の利用方法について説明します。

### マークダウンファイルの読み取り

店舗情報データは、プロジェクトの posts ディレクトリに保存されているマークダウンファイルから取得されます。各マークダウンファイルには、モバイルビュー用の画像データと、メタデータ（タイトル、日付、カテゴリなど）が含まれています。

以下の関数は、posts ディレクトリからすべてのマークダウンファイルを読み取り、メタデータと内容を解析します。

```javascript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const contents = matterResult.content.slice(0, 200);
    return {
      id,
      contents,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
```

### 店舗情報データのフィルタリング

特定のカテゴリやエリアに基づいて投稿データをフィルタリングするための関数です。これにより、ユーザーは特定のカテゴリやエリアの投稿のみを閲覧することができます。

```javascript
export function getPostDataByCategory(category) {
  const fileNames = fs.readdirSync(postsDirectory);
  let categoryPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const contents = matterResult.content.slice(0, 200);
    if (matterResult.data.category === category) {
      return {
        id,
        contents,
        ...matterResult.data,
      };
    }
  });
  return categoryPostsData
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
```

## API 利用方法

### 1. API エンドポイント

API エンドポイントは、Next.js の API ルートを使用して提供されています。以下のエンドポイントは、すべての店舗詳細データを取得するためのものです。

```javascript
import { getSortedPostsData } from "../../lib/posts";

export default function handler(req, res) {
  try {
    const allPostsData = getSortedPostsData();
    res.status(200).json(allPostsData);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
```

### 2. データのフェッチ

クライアント側でデータを取得するために、fetch を使用して API エンドポイントにリクエストを送信します。以下は、キーワード検索に基づいて店舗詳細データをフィルタリングするためのコードです。

```javascript
export async function getServerSideProps({ query }) {
  const keyword = query.keyword ? query.keyword.trim().toLowerCase() : "";
  if (!keyword) {
    return { props: { filteredPostsData: [], keyword } };
  }

  const keywordsArray = keyword.split(/[\s,、。;；\n]+/);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL_PROD
      : process.env.NEXT_PUBLIC_API_URL_DEV;

  try {
    const res = await fetch(apiUrl);
    const allPostsData = await res.json();
    const filteredPostsData = allPostsData.filter((postData) =>
      keywordsArray.every(
        (key) =>
          postData.title.includes(key) ||
          postData.titlejp.includes(key) ||
          postData.category.includes(key) ||
          postData.categoryJp.includes(key) ||
          postData.area.includes(key) ||
          postData.areaJp.includes(key) ||
          postData.others.includes(key)
      )
    );
    return { props: { filteredPostsData, keyword } };
  } catch (err) {
    console.error(err);
    return { props: { filteredPostsData: null } };
  }
}
```
