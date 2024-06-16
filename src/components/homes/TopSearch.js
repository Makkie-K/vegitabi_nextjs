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
    <AppBar position="relative">
      <Box
        component="img"
        sx={{ width: "100%" }}
        alt="Logo"
        src="/images/homes/top-search.webp" // ここに画像のパスを指定します
      />

      <Box
        component="form"
        onSubmit={handleSubmit}
        position="absolute"
        marginTop="300px"
        sx={{
          position: "absolute",
          top: "10%", // 上端の50%位置に配置
          left: "50%", // 左端の50%位置に配置
          transform: "translate(-50%, -50%)", // 中央寄せ
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="ホテル、レストラン名などキーワードを入力してください。"
          variant="standard"
          size="normal"
          InputProps={{ endAdornment: <SearchIcon />, disableUnderline: true }}
          onChange={handleChange}
          value={keyword}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // 白色で透明度80%に設定
            borderRadius: 3,
            width: 768, // 幅を768pxに設定
            maxWidth: "100%", // 最大幅を100%に設定
            height: "57px",
            padding: "12px",
            justifyContent: "center", // 水平方向（左右）の中央寄せ
          }}
        />
      </Box>
    </AppBar>
  );
}
