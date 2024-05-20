// import { useState, useEffect } from "react";
import React from "react";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Date from "/src/components/date";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import utilStyles from "/src/styles/utils.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export async function getServerSideProps({ query }) {
  const keyword = query.keyword ? query.keyword.toLowerCase() : "";

  if (!keyword) {
    return { props: { filteredPostsData: [], keyword } };
  }
  let apiUrl;
  if (process.env.NODE_ENV === "production") {
    apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD;
  } else {
    apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
  }
  try {
    const res = await fetch(apiUrl);
    const allPostsData = await res.json();

    // キーワードに基づいてデータをフィルタリング
    const filteredPostsData = allPostsData.filter(
      (postData) =>
        postData.title.includes(keyword) ||
        postData.titlejp.includes(keyword) ||
        postData.category.includes(keyword) ||
        postData.categoryJp.includes(keyword) ||
        postData.area.includes(keyword) ||
        postData.areaJp.includes(keyword) ||
        postData.others.includes(keyword)
    );

    return { props: { filteredPostsData, keyword } };
  } catch (err) {
    console.error(err);
    return { props: { filteredPostsData: null } };
  }
}

export default function Search({ filteredPostsData, keyword }) {
  const results = filteredPostsData;

  return (
    <Layout>
      <Container sx={{ marginTop: 20 }}>
        <Box
          sx={{
            textAlign: "left",
            backgroundColor: "",
            marginBottom: "30px",
          }}
        >
          検索結果
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Grid container spacing={2}>
            {results.length > 0 ? (
              results.map((result) => (
                <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
                  <Link href={`/posts/${result.id}`}>
                    <Card
                      sx={{
                        height: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={`/images/posts/${result.id}/${result.avator}`}
                        alt={result.title}
                        sx={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={result.title} // 英語版タイトルを表示
                        titleTypographyProps={{ variant: "h6" }} // 英語版タイトル用にvariantを'h6'に設定
                        subheader={
                          <div>
                            <Typography
                              variant="subtitle1"
                              style={{ fontSize: "0.8rem" }}
                            >
                              ({result.titlejp})
                            </Typography>{" "}
                            {/* 日本語版タイトルを表示 */}
                            <br />
                          </div>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          最終更新日: <Date dateString={result.date} />{" "}
                          {/* 日付を表示 */}
                        </Typography>
                      </CardContent>
                    </Card>

                    {/* <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: "4px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Avatar
                        alt={result.title}
                        src={`/images/posts/${result.id}/${result.avator}`}
                        sx={{
                          width: "100%",
                          height: 200,
                          objectFit: "cover",
                          borderTopLeftRadius: "4px",
                          borderTopRightRadius: "4px",
                        }}
                      />
                      <Box p={2} flexGrow={1}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "8px",
                          }}
                        >
                          <Box
                            sx={{
                              fontSize: "1.1rem",
                              fontWeight: "bold",
                            }}
                          >
                            {result.title}
                          </Box>
                          <Box
                            sx={{
                              fontSize: "0.9rem",
                              color: "rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            {result.date}
                          </Box>
                        </Box>
                      </Box>
                    </Box> */}
                  </Link>
                </Grid>
              ))
            ) : (
              <Box sx={{ textAlign: "center", width: "100%" }}>
                関連記事はありません。
              </Box>
            )}
          </Grid>
        </section>
      </Container>
    </Layout>
  );
}
