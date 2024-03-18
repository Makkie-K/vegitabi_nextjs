/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import HeaderPcLogo from "./HeaderPcLogo";
import HeaderPcMenu from "./HeaderPcMenu";
import HeaderPcSearch from "./HeaderPcSearch";
import Box from "@mui/material/Box";

export default function HeaderPc() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "64px",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <HeaderPcLogo />
        <HeaderPcMenu />
      </Box>
      {/* <Box>
        <HeaderPcSearch />
      </Box> */}
    </Box>
  );
}

// const container = css`
//   display: flex;
// `;
