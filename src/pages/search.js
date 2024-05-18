import React from "react";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Search({ keyword, results }) {
  return (
    <Layout>
      <Container>
        <Box sx={{ marginTop: "100px" }}>{keyword}</Box>
        {results.map((result) => (
          <Box key={result.id}>{result.title}</Box>
        ))}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.keyword);
  const keyword = context.query.keyword;
  const results = [
    { id: 1, title: "りんご" },
    { id: 2, title: "みかん" },
    { id: 3, title: "バナナ" },
    { id: 4, title: "メロン" },
    { id: 5, title: "苺" },
  ];
  return { props: { keyword, results } };
}
