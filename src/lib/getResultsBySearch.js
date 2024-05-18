import { getSortedPostsData } from "/src/lib/posts";

export const getResultsBySearch = () => {
  const sortedPostsData = getSortedPostsData();
  console.log(sortedPostsData);
  const results = sortedPostsData.map((post) => ({
    id: post.id,
    title: post.title,
  }));
  // const results = [
  //   { id: 1, title: "りんご" },
  //   { id: 2, title: "みかん" },
  //   { id: 3, title: "バナナ" },
  //   { id: 4, title: "メロン" },
  //   { id: 5, title: "苺" },
  // ];
  return results;
};
