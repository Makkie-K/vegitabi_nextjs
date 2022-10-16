import { getAllCategories, getPostDataByCategory } from "/src/lib/posts";

export default function CategoryIndex({ postData }) {
  return <p>{postData}-index</p>;
}

export async function getStaticPaths() {
  const paths = getAllCategories();
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  const postData = getPostDataByCategory(params.category);
  // const postData = getSortedPostsData()

  // console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

// export async function getStaticPaths() {
//   // id としてとりうる値のリストを返す
//   // const paths = getAllCategories();
//   // const pathss = ["accomodation", "eat-drink"];
//   const paths = [
//     { paths: { category: "accommodation" } },
//     { paths: { category: "eat-drink" } },
//   ];
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params }) {
//   console.log("params: " + JSON.stringify(params));

//   // params.id を使用して、ブログの投稿に必要なデータを取得する
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
