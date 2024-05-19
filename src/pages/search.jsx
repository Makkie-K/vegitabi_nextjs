// import { useState, useEffect } from "react";
import React from "react";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export async function getServerSideProps(context) {
  const keyword = context.query.keyword || "";
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

    return { props: { allPostsData: filteredPostsData, keyword } };
  } catch (err) {
    console.error(err);
    return { props: { allPostsData: null, keyword } };
  }
}

export default function Search({ allPostsData, keyword }) {
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
        {allPostsData > 0 ? (
          allPostsData.map((postData) => (
            <p>
              id: {postData.id}
              <br />
              title: {postData.title}
              <br />
              titlejp: {postData.titlejp}
              <br />
              date: {postData.date}
              <br />
              category: {postData.category}
              <br />
              categoryJp: {postData.categoryJp}
              <br />
              area: {postData.area}
              <br />
              areaJp: {postData.areaJp}
              <br />
              avator: {postData.avator}
              <br />
              address: {postData.address}
              <br />
              map: {postData.map}
            </p>
          ))
        ) : (
          <p>「{keyword}」を含む記事はありません。</p>
        )}
      </Container>
    </Layout>
  );
}
