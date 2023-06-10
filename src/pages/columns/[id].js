import Layout from "/src/components/layouts/layout";
import { getAllColumnIds, getColumnData } from "/src/lib/columns";
import Head from "next/head";
import Date from "/src/components/date";
import utilStyles from "/src/styles/utils.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Markdown from "/src/components/markdown";

export default function Column({ columnData }) {
  // console.log({ postData });
  return (
    <Layout>
      <Head>
        <title>{columnData.titleJ}</title>
      </Head>
      <Container maxWidth="md" className="columns" sx={{ marginTop: "90px" }}>
        <Box sx={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
          <article>
            <h1 className={utilStyles.headingXl}>{columnData.title}</h1>
            <br />
            <div className={utilStyles.lightText}>
              <Date dateString={columnData.date} />
            </div>
            <Markdown className={utilStyles.text}>
              {columnData.contentHtml}
            </Markdown>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
          </article>
        </Box>
      </Container>
    </Layout>
    // <>
    //   <div>{postData.title}</div>
    //   <div>{postData.id}</div>
    //   <div>{postData.date}</div>
    // </>
  );
}
export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
  const paths = getAllColumnIds();
  // console.log(paths[0].params);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // console.log("params: " + JSON.stringify(params));

  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const columnData = await getColumnData(params.id);
  return {
    props: {
      columnData,
    },
  };
}
