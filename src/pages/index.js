import React, { useState, useEffect } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "/src/components/utils/ProTip";
import Link from "/src/components/utils/Link";
import Copyright from "/src/components/utils/Copyright";
import Layout from "/src/components/layouts/layout";
import utilStyles from "/src/styles/utils.module.css";
import { getSortedPostsData } from "/src/lib/posts";
import Date from "/src/components/date";
import Categories from "/src/components/homes/Categories";
import Areas from "/src/components/homes/Areas";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

// import Header from "/src/components/layouts/Header";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.keyword) {
      setKeyword(router.query.keyword);
    }
  }, [router.query.keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleOpenMenu = (e) => {
    setOpen(!open);
  };

  const handleCloseMenu = (e) => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // enterを押したときに改行するのを防ぐため
    e.preventDefault();
    if (keyword.trim() === "") {
      // キーワードが空の場合、アラートを表示するか、単に何もしない
      alert("検索キーワードを入力してください");
      return;
    }
    router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
    handleCloseMenu();
  };
  return (
    <Layout>
      {/* <Header /> */}
      <Head>
        <title>vegitabi.com</title>
        <meta
          name="description"
          content="ベジタリアン＆ヴィーアンの方が快適に旅行するための情報が満載のウェブサイト"
        />
        <meta
          name="keywords"
          content="ベジタリアン, ヴィーガン, ビーガン, 旅行"
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
      <AppBar position="relative">
        <Box
          component="img"
          sx={{ width: "100%" }}
          alt="Logo"
          src="/images/homes/top-search.webp" // ここに画像のパスを指定します
        />
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            placeholder="検索"
            variant="outlined"
            size="normal"
            fullWidth
            InputProps={{ endAdornment: <SearchIcon /> }}
            onChange={handleChange}
            value={keyword}
          />
        </Box>
      </AppBar>

      <Container sx={{ paddingTop: "100px" }}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Categories />
          <Areas />
        </section>
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
