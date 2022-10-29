import React from "react";
import { useRouter } from "next/router";
// import { getResultBySearch } from "/src/lib/getResultBySearch";
import { getSearchedPostsData } from "src/lib/posts";

export default function Search({ searchedPostsData }) {
  const results = JSON.parse(searchedPostsData);
  // console.log(results);
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <div>{result.id}</div>
          <div>{result.title}</div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const keyword = context.query.keyword;
  let searchedPostsData = getSearchedPostsData(keyword);
  searchedPostsData = JSON.stringify(searchedPostsData);
  // console.log(searchedPostsData);
  return {
    props: {
      searchedPostsData,
    },
  };
}
