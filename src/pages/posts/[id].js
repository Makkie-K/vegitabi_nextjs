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
import Splider from "/src/components/utils/Splider";
import Image from "next/image";

export default function Post({ postData }) {
  const src = `/images/posts/${postData.id}/`;
  const filePostsRemoved = postData.filesPosts.filter(function (item) {
    return item !== ".DS_Store";
  });
  // console.log(filePostsRemoved);
  // console.log(postData.id);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container maxWidth="md" sx={{ marginTop: "30px", marginBottom: "10px" }}>
        {/* pcサイズ */}
        <Box
          sx={{
            display: "flex",
            display: { xs: "none", md: "flex", marginBottom: "10px" },
          }}
        >
          <Box sx={{ width: "60%" }}>
            {/* <Slider /> */}
            <Slider id={postData.id} length={postData.filesPosts.length} />
            {/* <Splider id={postData.id} length={postData.filesPosts.length} /> */}
          </Box>
          <Box
            sx={{
              width: "40%",
              // maxHeight: "341.45px",
              maxHeight: "597.45px",
              overflowY: "auto",
              marginLeft: "28px",
              lineHeight: "24px",
              marginTop: "1px",
            }}
          >
            <Box>
              <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            </Box>
            <Markdown className={utilStyles.text}>
              {postData.contentHtml}
            </Markdown>
          </Box>
        </Box>
        {/* {console.log(postData.fileCount)} */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        </Box>

        {/* スマホサイズ */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "768px",
            margin: "0 auto",
            display: { xs: "flex", md: "none" },
          }}
        >
          <article style={{ width: "100%" }}>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <br />
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <Markdown className={utilStyles.text}>
              {postData.contentHtml}
            </Markdown>
            {/* {filePostsRemoved.map((f) => {
              return (
                <Image
                  key={f}
                  src={src + f}
                  width={768}
                  height={1133}
                  alt="alt"
                  // layout="intrinsic"
                  quality={85}
                />
              );
            })} */}

            <ShopInfo
              style={{ width: "100%" }}
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
