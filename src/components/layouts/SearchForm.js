import React, { useState, useEffect } from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "/src/components/layouts/layout";
import utilStyles from "/src/styles/utils.module.css";
import Date from "/src/components/date";
import Categories from "/src/components/homes/Categories";
import Areas from "/src/components/homes/Areas";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function TopSearch() {
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      marginTop="0px"
      sx={{
        position: "relative",
        width: "500px",
        marginBottom: "30px",
      }}
    >
      <TextField
        id="outlined-basic"
        placeholder="ホテル、レストラン名などキーワードを入力してください。"
        variant="outlined"
        size="normal"
        InputProps={{ endAdornment: <SearchIcon />, disableUnderline: true }}
        onChange={handleChange}
        value={keyword}
        sx={{
          width: "768px", // 幅を768pxに設定
          maxWidth: "100%",
          height: "0px",
          justifyContent: "center", // 水平方向（左右）の中央寄せ
        }}
      />
    </Box>
  );
}
