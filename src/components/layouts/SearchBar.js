import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <InputBase placeholder="検索" value={keyword} onChange={handleChange} />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
