import React from "react";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Search({ keyword }) {
  return (
    <Layout>
      <Container>
        <Box sx={{ marginTop: "100px" }}>{keyword}</Box>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.keyword);
  const keyword = context.query.keyword;
  return { props: { keyword } };
}
