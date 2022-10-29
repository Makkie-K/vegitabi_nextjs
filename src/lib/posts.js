import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { log } from "console";

const postsDirectory = path.join(process.cwd(), "posts");
// console.log(postsDirectory);
// console.log("process.cwd:" + process.cwd());
export function getSortedPostsData() {
  // /posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory);
  // console.log("fileNames:" + fileNames);
  const allPostsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, "");

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    // console.log("**************" + fullPath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // console.log("**************" + fileContents);
    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents);
    // console.log(matterResult.data);
    const contents = matterResult.content.slice(0, 200);
    return {
      id,
      contents,
      ...matterResult.data,
    };
  });
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
// getAllPostIds()
export function getAllCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  // const categories = [];
  // ***********************
  const categories = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const category = matterResult.data.category;
    return category;
  });
  return categories.map((category) => {
    return {
      params: {
        category: category,
      },
    };
  });
}

export function getPostDataByCategory(category) {
  // posts配下のマークダウンファイルを全件取得する
  const fileNames = fs.readdirSync(postsDirectory);
  let categoryPostsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, "");
    // 抽出されたidを元に、マークダウンファイルのdataとcontentを取得し、returnする
    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    // console.log(fileContents);
    const matterResult = matter(fileContents);
    // const contentHtml = matterResult.content.toString();
    const contents = matterResult.content.slice(0, 200);
    const c = matterResult.data.category;
    if (c === category) {
      return {
        id,
        contents,
        ...matterResult.data,
      };
    }
  });
  categoryPostsData = categoryPostsData.filter((val) => Boolean(val));
  return categoryPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  // console.log("fullPath: " + fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const files = fs.readdirSync(process.cwd() + "/public/images/menus/1");
  // console.log("files:" + files);
  const fileCount = files.length;
  // 投稿のメタデータ部分を解析するために gray-matter を使う
  // console.log("メタデータ: " + matter(fileContents).data.category.toString());
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content.toString();

  // データを id と組み合わせる
  return {
    id,
    contentHtml,
    files,
    fileCount,
    ...matterResult.data,
  };
}

export function getAllAreas() {
  const fileNames = fs.readdirSync(postsDirectory);
  const areas = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const area = matterResult.data.area;
    return area;
  });
  return areas.map((area) => {
    return {
      params: {
        area: area,
      },
    };
  });
}

export function getPostDataByArea(area) {
  // posts配下のマークダウンファイルを全件取得する
  const fileNames = fs.readdirSync(postsDirectory);
  let areaPostsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, "");
    // 抽出されたidを元に、マークダウンファイルのdataとcontentを取得し、returnする
    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const contents = matterResult.content.slice(0, 200);
    const a = matterResult.data.area;
    if (a === area) {
      return {
        id,
        contents,
        ...matterResult.data,
      };
    }
  });
  areaPostsData = areaPostsData.filter((val) => Boolean(val));
  return areaPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// keywordを含んだ記事をreturnする
export function getSearchedPostsData(keyword) {
  // console.log(keyword);
  const result = [
    { id: "4", title: "オーストラリアの記事" },
    { id: "5", title: "日本の記事" },
  ];
  return result;
  // return [
  // {
  // id: "4",
  // contents:
  //   "\n" +
  //   "![alt](/images/posts/1/2.webp)\n" +
  //   "\n" +
  //   "デボンポート北部のターナーズ・ビーチにほど近い場所にあるベリー畑。\n" +
  //   "夏にはベリー摘みの体験ができるこのファームに併設されているのは、\n" +
  //   "![alt](/images/posts/1/13.webp)\n" +
  //   "自家栽培のベリーやハーブを使った料理やデザートを楽しめる\n" +
  //   "レストランです。\n" +
  //   "![alt](/images/posts/1/14.webp",
  // title: "オーストラリアの記事",
  // date: "2022-09-26",
  // category: "飲食店",
  // area: "オーストラリア",
  // address: "1-1-1 Nakano",
  // map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7385056989474!2d146.23618631482057!3d-41.16205697928552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7bcbff45c9d9cd%3A0xbff879cb93cfc4c8!2sTurners%20Beach%20Berry%20Patch!5e0!3m2!1sja!2sau!4v1664233106816!5m2!1sja!2sau",
  // telephone: " 000-0000 ",
  // url: "https://www.google.com/",
  // businessHour: " 火曜日 〜 日曜日 10:00 〜 17:00 ",
  // others: "",
  // id,
  // contents,
  // ...matterResult.data,
  //   },
  // ];
}
