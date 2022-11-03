import React from "react";
import { useRouter } from "next/router";
// import { getResultBySearch } from "/src/lib/getResultBySearch";
import { getSearchedPostsData } from "src/lib/posts";

export default function Search({ searchedPostsData }) {
  const results = JSON.parse(searchedPostsData);

  console.log(results);
  return (
    <div>
      {results.length > 0 ? (
        <div>
          {results.map((result) => (
            <div key={result.id}>
              <div>{result.id}</div>
              <div>{result.title}</div>
              <div>{result.contents}</div>
              <div>{result.date}</div>
              <div>{result.category}</div>
              <div>{result.area}</div>
              <div>{result.address}</div>
              <div>{result.map}</div>
              <div>{result.telephone}</div>
              <div>{result.url}</div>
              <div>{result.businessHour}</div>
              <div>{result.others}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>検索結果なし</div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const keyword = context.query.keyword;
  let searchedPostsData = await getSearchedPostsData(keyword);
  // console.log(searchedPostsData);
  searchedPostsData = JSON.stringify(searchedPostsData);
  // console.log(searchedPostsData);
  // console.log(searchedPostsData);
  return {
    props: {
      searchedPostsData,
    },
  };
}
