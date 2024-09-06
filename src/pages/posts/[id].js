import Layout from "/src/components/layouts/layout";
import { getAllPostIds, getPostData } from "/src/lib/posts";
import Head from "next/head";
import Date from "/src/components/date";
import utilStyles from "/src/styles/utils.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Markdown from "/src/components/markdown";
import ShopInfoPc from "/src/components/ShopInfoPc";
import ShopInfoMo from "/src/components/ShopInfoMo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

// カスタムサムネイルレンダリング関数
const renderThumbs = (postData) => {
  return [...Array(postData.fileCount)].map((_, index) => (
    <div key={index} className="carousel-thumb-container">
      {" "}
      {/* 親要素にクラスを適用 */}
      <img
        className="carousel-thumb" // ここで carousel-thumb クラスを適用
        src={`/images/posts/${postData.id}/${index + 1}.webp`}
        alt={`Thumbnail ${index + 1}`}
      />
    </div>
  ));
};

export default function Post({ postData }) {
  // console.log(postData);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta
          name="keywords"
          content={`ベジタリアン,ヴィーガン,${postData.area},${postData.category}`}
        />
        <meta
          property="og:url"
          content={`https://vegitabi.com/posts/${postData.id}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${postData.title}`} />
        <meta property="og:description" content={`${postData.description}`} />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content={`https://vegitabi.com/images/posts/${postData.id}/1.webp`}
          // content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          marginTop: "30px",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* pcサイズ */}
        <Box
          sx={{
            // display: "flex",
            display: { xs: "none", md: "block", marginBottom: "10px" },
            width: { xs: "100%", md: "768px" },
            margin: "auto",
          }}
        >
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.dateParent}>
            <div className={utilStyles.dateChild}>
              <Date dateString={postData.date} />
            </div>
          </div>
          <Markdown className={utilStyles.text}>
            {postData.contentHtml}
          </Markdown>
          <Carousel
            showThumbs={true}
            renderThumbs={() => renderThumbs(postData)}
            showIndicators={false} // ここを追加
          >
            {[...Array(postData.fileCount)].map((_, index) => (
              <div
                key={index}
                style={{ width: "768px", backgroundColor: "#F5F5F5" }}
              >
                <img
                  style={{
                    maxWidth: "768px",
                    objectFit: "contain",
                    maxHeight: "513px",
                  }}
                  src={`/images/posts/${postData.id}/${index + 1}.webp`}
                />
              </div>
            ))}
          </Carousel>

          <ShopInfoPc
            address={postData.address}
            map={postData.map}
            title={postData.title}
            url={postData.url}
            businessHour={postData.businessHour}
            telephone={postData.telephone}
            others={postData.others}
            files={postData.files}
            menuCount={postData.menuCount}
            filesExist={postData.filesExist}
            id={Number(postData.id)}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            maxWidth: { xs: "100%", md: "768px" },
          }}
        ></Box>

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
            <div>
              {[...Array(postData.fileCount)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                    src={`/images/posts/${postData.id}/${index + 1}.webp`}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <ShopInfoMo
              style={{ width: "100%" }}
              address={postData.address}
              map={postData.map}
              title={postData.title}
              url={postData.url}
              businessHour={postData.businessHour}
              telephone={postData.telephone}
              others={postData.others}
              files={postData.files}
              menuCount={postData.menuCount}
              filesExist={postData.filesExist}
              id={Number(postData.id)}
            />
          </article>
        </Box>
      </Container>
    </Layout>
  );
}
export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
