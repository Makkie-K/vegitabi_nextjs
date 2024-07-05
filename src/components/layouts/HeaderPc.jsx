/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import React from "react";
import { css } from "@emotion/react";
import HeaderPcLogo from "./HeaderPcLogo";
import HeaderPcMenu from "./HeaderPcMenu";
import HeaderPcSearch from "./HeaderPcSearch";
import HeaderPcMenuEn from "./HeaderPcMenuEn";
import Box from "@mui/material/Box";

export default function HeaderPc() {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const language = pathname.slice(0, 3);

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
        {/* <HeaderPcSearch /> */}
      </Box>
      <Box>{language === "/en" ? <HeaderPcMenuEn /> : <HeaderPcMenu />}</Box>
    </Box>
  );
}

// const container = css`
//   display: flex;
// `;
