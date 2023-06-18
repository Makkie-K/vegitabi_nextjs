import React from "react";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ marginTop: "90px}" }}>
        <Box>
          <h1 style={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.55)" }}>
            記事はまだありません
          </h1>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
