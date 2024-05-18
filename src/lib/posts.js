import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { log } from "console";
import { id } from "date-fns/locale";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // /posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, "");

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents);

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
  const filesExist = checkIfNoImageExists(id);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const files = fs.readdirSync(process.cwd() + `/public/images/posts/${id}`);
  const menus = fs.readdirSync(process.cwd() + `/public/images/menus/${id}`);
  const filesPosts = fs.readdirSync(
    process.cwd() + `/public/images/posts/${id}`
  );

  const fileCount = files.length;
  const menuCount = menus.length;

  const fileCountPosts = filesPosts.length;
  // 投稿のメタデータ部分を解析するために gray-matter を使う

  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content.toString();

  // データを id と組み合わせる
  return {
    id,
    contentHtml,
    files,
    fileCount,
    menuCount,
    filesPosts,
    fileCountPosts,
    filesExist,
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

export function getSearchedPostsData(keyword) {
  // console.log(keyword);
  const keywords = handleKeyword(keyword);
  let results = [];
  let hitIDs = [];

  if (keywords.length !== 0) {
    const allPostsData = getSortedPostsData();

    // 検索結果を格納する配列
    const hitObjects = [];
    // AND検索処理
    const lowercasedKeywords = keywords.map((keyword) => keyword.toLowerCase());

    allPostsData.forEach((obj) => {
      const isMatch = lowercasedKeywords.every(
        (keyword) =>
          obj.title.toLowerCase().includes(keyword) ||
          obj.titlejp.includes(keyword) ||
          obj.category.toLowerCase().includes(keyword) ||
          obj.categoryJp.includes(keyword) ||
          obj.area.toLowerCase().includes(keyword) ||
          obj.areaJp.includes(keyword) ||
          obj.address.includes(keyword) ||
          obj.others.includes(keyword)
      );
      if (isMatch) {
        hitObjects.push(obj);
      }
    });
    // console.log(hitObjects);
    return hitObjects;
  }
  return [];
}

export function handleKeyword(keyword) {
  let handledKeyword = keyword.trim();

  handledKeyword = handledKeyword.replace(/　/g, " ");

  const handledKeywords = handledKeyword.split(/\s/);

  return handledKeywords.filter(Boolean);
}

export function checkIfNoImageExists(id) {
  const directoryPath = path.join(process.cwd(), "public/images/menus", id);
  const filePath = path.join(directoryPath, "no-image.jpeg");

  try {
    fs.accessSync(filePath);
    return true; // ファイルが存在する場合はtrueを返す
  } catch (error) {
    return false; // ファイルが存在しない場合はfalseを返す
  }
}
