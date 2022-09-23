import * as React from "react";
import List from "/src/components/List";
import Layout from "/src/components/layouts/layout";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Date from "/src/components/date";
import { getSortedPostsData } from "/src/lib/posts";
import Link from "/src/components/utils/Link";

export default function PostsIndex({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout>
      <Container maxWidth="md">
        <ul>
          {allPostsData.map(({ id, date, title, category, area }) => {
            <List />;
            // <li>
            //   <Link href="/">{id}</Link>
            //   <br />
            //   <small>
            //     <Date dateString={date} />
            //   </small>
            // </li>;
          })}
        </ul>
        <List />
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
