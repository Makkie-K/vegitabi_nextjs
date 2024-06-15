// pages/search.js

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Date from "/src/components/date";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import Grid from "@mui/material/Grid";
import utilStyles from "/src/styles/utils.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!keyword) return; // キーワードが無い場合は何もしない

    setLoading(true);

    // キーワードをスペースで分割して配列にする
    const keywordsArray = keyword.split(/[\s,、。;；\n]+/);

    let apiUrl;
    if (process.env.NODE_ENV === "production") {
      apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD;
    } else {
      apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
    }

    async function fetchData() {
      try {
        const res = await fetch(apiUrl);
        const allPostsData = await res.json();
        console.log("Fetched data:", allPostsData); // デバッグ用に追加
        const filteredPostsData = allPostsData.filter((postData) =>
          keywordsArray.every(
            (key) =>
              postData.title.includes(key) ||
              postData.titlejp.includes(key) ||
              postData.category.includes(key) ||
              postData.categoryJp.includes(key) ||
              postData.area.includes(key) ||
              postData.areaJp.includes(key) ||
              postData.others.includes(key)
          )
        );

        setResults(filteredPostsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [keyword]);

  if (loading) {
    return (
      <Layout>
        <Head>
          <title>「{keyword}」を含む記事一覧</title>
          <meta name="description" content={`「${keyword}」を含む記事一覧`} />
          <meta
            name="keywords"
            content={`ベジタリアン, ヴィーガン, ビーガン, ${keyword}`}
          />
          <meta property="og:url" content="https://vegitabi.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="home" />
          <meta
            property="og:description"
            content="ベジタリアン＆ヴィーアンの方が快適に旅行するための情報が満載のウェブサイト"
          />
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
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            <CircularProgress />
            <Typography>Loading...</Typography>
          </Box>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>「{keyword}」を含む記事一覧</title>
        <meta name="description" content={`「${keyword}」を含む記事一覧`} />
        <meta
          name="keywords"
          content={`ベジタリアン, ヴィーガン, ビーガン, ${keyword}`}
        />
        <meta property="og:url" content="https://vegitabi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="home" />
        <meta
          property="og:description"
          content="ベジタリアン＆ヴィーアンの方が快適に旅行するための情報が満載のウェブサイト"
        />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container sx={{ marginTop: 20 }}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Grid container spacing={2}>
            {results.length > 0 ? (
              results.map((result) => (
                <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
                  <Link href={`/posts/${result.id}`}>
                    <Card sx={{ height: "100%" }}>
                      <CardMedia
                        component="img"
                        image={`/images/posts/${result.id}/${result.avator}`}
                        alt={result.title}
                        sx={{ aspectRatio: "1/1" }}
                      />
                      <CardHeader
                        action={
                          <IconButton aria-label="settings">
                            {/* <MoreVertIcon /> */}
                          </IconButton>
                        }
                        title={result.title}
                        titleTypographyProps={{ variant: "h6" }}
                        subheader={
                          <div>
                            <Typography
                              variant="subtitle1"
                              style={{ fontSize: "0.8rem" }}
                            >
                              ({result.titlejp})
                            </Typography>
                            <br />
                          </div>
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          <Date dateString={result.date} />
                        </Typography>
                      </CardContent>
                    </Card>
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

// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Layout from "/src/components/layouts/layout";
// import Container from "@mui/material/Container";
// import Date from "/src/components/date";
// import Box from "@mui/material/Box";
// import Link from "/src/components/utils/Link";
// import Avatar from "@mui/material/Avatar";
// import Grid from "@mui/material/Grid";
// import utilStyles from "/src/styles/utils.module.css";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Dialog from "@mui/material/Dialog";
// import CircularProgress from "@mui/material/CircularProgress";

// export async function getServerSideProps({ query }) {
//   const keyword = query.keyword ? query.keyword.trim().toLowerCase() : "";

//   if (!keyword) {
//     return { props: { filteredPostsData: [], keyword } };
//   }

//   // キーワードをスペースで分割して配列にする
//   const keywordsArray = keyword.split(/[\s,、。;；\n]+/);
//   console.log(keywordsArray);
//   let apiUrl;
//   if (process.env.NODE_ENV === "production") {
//     apiUrl = process.env.NEXT_PUBLIC_API_URL_PROD;
//   } else {
//     apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
//   }
//   try {
//     const res = await fetch(apiUrl);
//     const allPostsData = await res.json();

//     const filteredPostsData = allPostsData.filter((postData) =>
//       keywordsArray.every(
//         (key) =>
//           postData.title.includes(key) ||
//           postData.titlejp.includes(key) ||
//           postData.category.includes(key) ||
//           postData.categoryJp.includes(key) ||
//           postData.area.includes(key) ||
//           postData.areaJp.includes(key) ||
//           postData.others.includes(key)
//       )
//     );

//     return { props: { filteredPostsData, keyword } };
//   } catch (err) {
//     console.error(err);
//     return { props: { filteredPostsData: null } };
//   }
// }

// export default function Search({ filteredPostsData, keyword }) {
//   const [loading, setLoading] = useState(true);
//   // const results = filteredPostsData;
//   const [results, setResults] = useState(filteredPostsData);
//   useEffect(() => {
//     if (filteredPostsData) {
//       // 意図的に遅延を追加
//       setTimeout(() => {
//         setResults(filteredPostsData);
//         setLoading(false);
//       }, 0);
//     }
//   }, [filteredPostsData]);

//   useEffect(() => {
//     setLoading(true); // ローディングを再開
//   }, [keyword]);

//   return (
//     <Layout>
//       <Head>
//         <title>「{keyword}」を含む記事一覧</title>
//         <meta name="description" content={`「${keyword}」を含む記事一覧`} />
//         <meta
//           name="keywords"
//           content={`ベジタリアン, ヴィーガン, ビーガン, ${keyword}`}
//         />
//         <meta property="og:url" content="https://vegitabi.com" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="home" />
//         <meta
//           property="og:description"
//           content="ベジタリアン＆ヴィーアンの方が快適に旅行するための情報が満載のウェブサイト"
//         />
//         <meta property="og:site_name" content="vegitabi.com" />
//         <meta
//           property="og:image"
//           content="https://vegitabi.com/images/ogp1.png"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Head>
//       <Container sx={{ marginTop: 20 }}>
//         <Box
//           sx={{
//             textAlign: "left",
//             backgroundColor: "",
//             marginBottom: "30px",
//           }}
//         ></Box>
//         <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//           <Grid container spacing={2}>
//             {loading ? (
//               <Box
//                 sx={{
//                   position: "fixed",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                 }}
//               >
//                 <CircularProgress />
//                 <Typography>Loading...</Typography>
//               </Box>
//             ) : results.length > 0 ? (
//               results.map((result) => (
//                 <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
//                   <Link href={`/posts/${result.id}`}>
//                     <Card
//                       sx={{
//                         height: "100%",
//                       }}
//                     >
//                       <CardMedia
//                         component="img"
//                         image={`/images/posts/${result.id}/${result.avator}`}
//                         alt={result.title}
//                         sx={{ aspectRatio: "1/1" }}
//                       />
//                       <CardHeader
//                         action={
//                           <IconButton aria-label="settings">
//                             {/* <MoreVertIcon /> */}
//                           </IconButton>
//                         }
//                         title={result.title} // 英語版タイトルを表示
//                         titleTypographyProps={{ variant: "h6" }} // 英語版タイトル用にvariantを'h6'に設定
//                         subheader={
//                           <div>
//                             <Typography
//                               variant="subtitle1"
//                               style={{ fontSize: "0.8rem" }}
//                             >
//                               ({result.titlejp})
//                             </Typography>{" "}
//                             {/* 日本語版タイトルを表示 */}
//                             <br />
//                           </div>
//                         }
//                       />
//                       <CardContent>
//                         <Typography variant="body2" color="text.secondary">
//                           <Date dateString={result.date} /> {/* 日付を表示 */}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Link>
//                 </Grid>
//               ))
//             ) : (
//               <Box sx={{ textAlign: "center", width: "100%" }}>
//                 関連記事はありません。
//               </Box>
//             )}
//           </Grid>
//         </section>
//       </Container>
//     </Layout>
//   );
// }
