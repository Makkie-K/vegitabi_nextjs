import React, { useState, useEffect } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
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
import TopSearch from "../../components/homes/TopSearch";

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
      alert("Please enter search keywords");
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
          content="A website full of information for vegetarians and vegans to travel comfortably."
        />
        <meta name="keywords" content="Vegan, Vegetarian, Tokyo, Japan" />
        <meta property="og:url" content="https://vegitabi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="home" />
        <meta
          property="og:description"
          content="A website full of information for vegetarians and vegans to travel comfortably."
        />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <TopSearch />
      </Box>
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
