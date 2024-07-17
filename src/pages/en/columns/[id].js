import Layout from "/src/components/layouts/layout";
import { getAllColumnIds, getColumnDataEn } from "/src/lib/columns";
import Head from "next/head";
import DateEn from "/src/components/dateEn";
import utilStyles from "/src/styles/utils.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Markdown from "/src/components/markdown";

export default function ColumnEn({ columnData }) {
  return (
    <Layout>
      <Head>
        <title>{columnData.title}</title>
        <meta name="description" content={`${columnData.description}`} />
        <meta
          name="keywords"
          content={`${columnData.keyword1}, ${columnData.keyword2}, ${columnData.keyword3}, ${columnData.keyword4}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${columnData.title}`} />
        <meta property="og:description" content={`${columnData.description}`} />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:url"
          content={`https://vegitabi.com/en/columns/${columnData.id}`}
        />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container
        maxWidth="md"
        className="columns"
        id="columns"
        sx={{ marginTop: "90px" }}
      >
        <Box sx={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
          <article>
            <h1>{columnData.title}</h1>
            <br />
            <div className={utilStyles.lightText}>
              <DateEn dateString={columnData.date} />
            </div>
            <Markdown className={utilStyles.text}>
              {columnData.contentHtml}
            </Markdown>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
          </article>
        </Box>
      </Container>
    </Layout>
  );
}
export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
  const paths = getAllColumnIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const columnData = await getColumnDataEn(params.id);

  return {
    props: {
      columnData,
    },
  };
}
