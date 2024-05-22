/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

export default function HeaderPcSearch() {
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
    // setKeyword("検索キーワード");
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          placeholder="検索"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.6)" }} />,
          }}
          onChange={handleChange}
          value={keyword}
        />
      </Box>
    </>
  );
}
