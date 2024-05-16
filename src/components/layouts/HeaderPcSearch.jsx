/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HeaderPcSearch() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(e);
    // enterを押したときに改行するのを防ぐため
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
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
