import Layout from "/src/components/layouts/layout";
import { getAllPostIds, getPostData } from "/src/lib/posts";
import Head from "next/head";
import Date from "/src/components/date";
import utilStyles from "/src/styles/utils.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Markdown from "/src/components/markdown";
import ShopInfo from "/src/components/ShopInfo";
import Slider from "/src/components/utils/Slider";

export default function Post({ postData }) {
  // console.log({ postData });
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        {/* スマホサイズ */}
        <Box sx={{ display: "flex", display: { xs: "none", md: "flex" } }}>
          <Box sx={{ width: "60%" }}>
            <Slider />
          </Box>
          <Box sx={{ width: "40%", maxHeight: "341.45px", overflowY: "auto" }}>
            <p>
              Importantly, Next.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" Next.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
            <p>
              Importantly, Next.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" Next.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
            <p>
              Importantly, Next.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" Next.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
            <p>
              Importantly, Next.js lets you **choose** which pre-rendering form
              to use for each page. You can create a "hybrid" Next.js app by
              using Static Generation for most pages and using Server-side
              Rendering for others.
            </p>
          </Box>
        </Box>
        {/* pcサイズ */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "768px",
            margin: "0 auto",
            display: { xs: "flex", md: "none" },
          }}
        >
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <br />
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <Markdown className={utilStyles.text}>
              {postData.contentHtml}
            </Markdown>
            {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
            <ShopInfo
              address={postData.address}
              map={postData.map}
              title={postData.title}
              url={postData.url}
              businessHour={postData.businessHour}
              telephone={postData.telephone}
              others={postData.others}
              files={postData.files}
              fileCount={postData.fileCount}
              // id={postData.id}
              id={Number(postData.id)}
            />
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
  const paths = getAllPostIds();
  // console.log(paths[0].params);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // console.log("params: " + JSON.stringify(params));

  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
