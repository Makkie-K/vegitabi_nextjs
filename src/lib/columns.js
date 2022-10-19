import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { log } from "console";

const columnsDirectory = path.join(process.cwd(), "columns");
console.log(columnsDirectory);
// console.log("process.cwd:" + process.cwd());
export function getSortedColumnsData() {
  // /posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(columnsDirectory);
  // console.log("fileNames:" + fileNames);
  const allColumnsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, "");

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(columnsDirectory, fileName);
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
  return allColumnsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getAllColumnIds() {
  const fileNames = fs.readdirSync(columnsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getColumnData(id) {
  const fullPath = path.join(columnsDirectory, `${id}.md`);
  // console.log("fullPath: " + fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // 投稿のメタデータ部分を解析するために gray-matter を使う
  // console.log("メタデータ: " + matter(fileContents).data.category.toString());
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content.toString();

  // データを id と組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
