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
  console.log(categories);

  // ***********************
  // console.log(fileNames);
  // マークダウンファイルからカテゴリー名を配列で取得
  // const categories = ["accomodation", "eat-drink"];
  // console.log(categories);
  return categories.map((category) => {
    // console.log(category);
    return {
      params: {
        category: category,
      },
    };
  });
}

export function getPostDataByCategory(category) {}

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
