import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "/src/components/utils/ProTip";
import Link from "/src/components/utils/Link";
import Copyright from "/src/components/utils/Copyright";
import Layout from "/src/components/layouts/Layout";
// import Layout, { siteTitle } from "/src/components/layouts/Layout";
import utilStyles from "/src/styles/utils.module.css";
import { getSortedPostsData } from "/src/lib/posts";
import Date from "/src/components/date";

export default function Index({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        {/* <title>{siteTitle}</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="sm">
        <section className={utilStyles.headingMd}>
          <p>Vegan & Vegetarian</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                {/* <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link> */}
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                {/* {title}
                <br />
                {id}
                <br />
                {date} */}
              </li>
            ))}
          </ul>
        </section>
        <Box sx={{ my: 4 }}>
          <Link href="/posts/first-post" color="secondary">
            Go to first-post
          </Link>
          <ProTip />
          <Copyright />
        </Box>
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
