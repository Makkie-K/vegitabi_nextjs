// import { useState, useEffect } from "react";
import React from "react";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Date from "/src/components/date";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import Avatar from "@mui/material/Avatar";

export async function getServerSideProps({ query }) {
  const keyword = query.keyword || "";

  if (!keyword) {
    return { props: { filteredPostsData: [], keyword } };
  }
  let apiUrl;
  if (process.env.NODE_ENV === "production") {
    apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD;
  } else {
    apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
  }
  try {
    const res = await fetch(apiUrl);
    const allPostsData = await res.json();

    // キーワードに基づいてデータをフィルタリング
    const filteredPostsData = allPostsData.filter(
      (postData) =>
        postData.title.includes(keyword) ||
        postData.titlejp.includes(keyword) ||
        postData.category.includes(keyword) ||
        postData.categoryJp.includes(keyword) ||
        postData.area.includes(keyword) ||
        postData.areaJp.includes(keyword) ||
        postData.others.includes(keyword)
    );

    return { props: { filteredPostsData, keyword } };
  } catch (err) {
    console.error(err);
    return { props: { filteredPostsData: null } };
  }
}

export default function Search({ filteredPostsData, keyword }) {
  const results = filteredPostsData;
  // const results = JSON.parse(allPostsData);
  console.log(keyword);
  console.log(results.length);
  return (
    <Layout>
      <Container maxWidth="md" sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "lightgrey",
            marginBottom: "30px",
          }}
        >
          「<span>{keyword}</span>」を含む記事一覧
        </Box>
        <section>
          {results.length > 0 ? (
            <div>
              {results.map((result) => (
                <div key={result.id}>{result.title}</div>
              ))}
            </div>
          ) : (
            <p>「{keyword}」を含む記事はありません。</p>
          )}
        </section>
      </Container>
    </Layout>
  );
}
