import { getSortedPostsData } from "/src/lib/posts";

export function getResultBySearch(keyword) {
  // console.log(keyword);
  const results = [
    { id: 1, title: "result_1" },
    { id: 2, title: "result_2" },
  ];
  return results;
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// export function getResultBySearch(keyword) {
//   console.log(keyword);
//   const results = [
//     { id: 1, title: "result_1" },
//     { id: 2, title: "result_2" },
//   ];
//   return results;
// }
