/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMoLogo from "./HeaderMoLogo";
import HeaderMoMenu from "./HeaderMoMenu";

export default function HeaderMo() {
  return (
    // <div css={container}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}
    >
      <Box sx={{ width: "calc(100vw - 50px)" }}>
        <HeaderMoLogo />
      </Box>
      <Box sx={{ width: "33px" }}>
        <HeaderMoMenu />
      </Box>
    </Box>
    // </div>
  );
}

// const container = css`
//   display: flex;
// `;
