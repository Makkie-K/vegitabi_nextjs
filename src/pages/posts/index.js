import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "/src/components/utils/ProTip";
import Link from "/src/components/utils/Link";
import Copyright from "/src/components/utils/Copyright";
import Layout from "/src/components/layouts/layout";
import utilStyles from "/src/styles/utils.module.css";
import { getSortedPostsData } from "/src/lib/posts";
import Date from "/src/components/date";
import Categories from "/src/components/homes/Categories";
import Areas from "/src/components/homes/Areas";
import Avatar from "@mui/material/Avatar";
// import Header from "/src/components/layouts/Header";

export default function Index({ allPostsData }) {
  return (
    <Layout>
      {/* <Header /> */}
      <Container maxWidth="md" sx={{ marginTop: "30px}" }}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "lightgrey",
            marginBottom: "30px",
          }}
        >
          記事一覧
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/* <ul className={utilStyles.list}> */}
          {allPostsData.map(({ id, date, title, contents, category, area }) => (
            <Box
              className={utilStyles.listItem}
              key={id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                border: "solid 1px lightgrey",
                padding: "5px",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Avatar
                  alt={title}
                  src={`/images/posts/${id}/1.webp`}
                  variant="square"
                  // sx={{ width: "100%", height: 135 }}
                  sx={{ width: "100%", height: 180 }}
                />
              </Box>
              <Box
                sx={{
                  paddingLeft: "5px",
                  width: { xs: "100%", md: "50%" },
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ margin: "15px" }}>
                  <Link
                    href={`/posts/${id}`}
                    sx={{
                      display: "flex",
                      // textDecorationColor: "rgba(0, 0, 0, 0.55)",
                      textDecoration: "none",
                      color: "rgba(0, 0, 0, 0.55)",
                    }}
                  >
                    {title}
                  </Link>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </Box>
                <Box sx={{ margin: "15px" }}>
                  <Link
                    href={`/posts/${id}`}
                    sx={{
                      color: "rgba(0, 0, 0, 0.55)",
                      textDecoration: "none",
                      fontSize: "85%",
                    }}
                  >
                    {contents}
                  </Link>
                </Box>
                {/* <Box>{category}</Box>
                <Box>{area}</Box> */}
              </Box>
            </Box>
          ))}
          {/* </ul> */}
        </section>
      </Container>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
