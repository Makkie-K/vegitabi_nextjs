import React, { useState, useEffect } from "react";
import { getAllCategories, getPostDataByCategoryEn } from "/src/lib/posts";
import Head from "next/head";
import utilStyles from "/src/styles/utils.module.css";
import Link from "/src/components/utils/Link";
import DateEn from "/src/components/dateEn";
import Box from "@mui/material/Box";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";

export default function CategoryIndex({ postData }) {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const displayNum = 12; // Change displayNum to 12 for 4 cards per row
  const [end, setEnd] = useState(displayNum);

  const handleChange = (e, page) => {
    const start = (page - 1) * displayNum;
    const end = start + displayNum;
    setStart(start);
    setEnd(end);
    setPage(page);
  };

  useEffect(() => {
    setStart(0);
    setEnd(displayNum);
    setPage(1);
  }, [postData]);

  const pageCount = Math.ceil(postData.length / displayNum);
  const maxLength = 36;
  return (
    <Layout>
      <Head>
        <title>{postData[0].category}</title>
        {/* <title>{postData[0].categoryJp}の記事一覧</title> */}
        <meta
          name="description"
          content={`${postData[0].category}の記事一覧`}
        />
        <meta
          name="keywords"
          content={`ベジタリアン,ヴィーガン,${postData[0].area},${postData[0].category}`}
        />
        <meta
          property="og:url"
          content={`https://vegitabi.com/categories/${postData[0].category}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${postData[0].category}`} />
        <meta property="og:description" content={`${postData[0].category}`} />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container sx={{ marginTop: 20 }}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "",
            marginBottom: "30px",
          }}
        >
          {postData[0].category}
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Grid container spacing={2}>
            {postData
              .slice(start, end)
              .map(
                ({
                  id,
                  date,
                  title,
                  contents,
                  avator,
                  address,
                  telephone,
                  businessHour,
                }) => (
                  <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                    <Link href={`/en/posts/${id}`}>
                      <Card sx={{ height: "100%" }}>
                        <CardMedia
                          component="img"
                          image={`/images/posts/${id}/${avator}`}
                          alt=""
                          sx={{ aspectRatio: "1/1" }} // Set aspectRatio to maintain image's aspect ratio
                        />
                        <CardHeader
                          // action={
                          //   <IconButton aria-label="settings">
                          //     <MoreVertIcon />
                          //   </IconButton>
                          // }
                          title={title} // 英語版タイトルを表示
                          titleTypographyProps={{ variant: "h6" }} // 英語版タイトル用にvariantを'h6'に設定
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            Latest update: <DateEn dateString={date} />{" "}
                            {/* 日付を表示 */}
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing></CardActions>
                        <Collapse
                          in={true}
                          timeout="auto"
                          unmountOnExit
                        ></Collapse>
                      </Card>
                    </Link>
                  </Grid>
                )
              )}
          </Grid>
        </section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Box sx={{ paddingTop: "50px" }}>
            <Pagination count={pageCount} page={page} onChange={handleChange} />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCategories();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostDataByCategoryEn(params.category);

  return {
    props: {
      postData,
    },
  };
}
