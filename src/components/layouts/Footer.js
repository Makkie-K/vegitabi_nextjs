import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Copyright from "/src/components/utils/Copyright";
import Link from "/src/components/utils/Link";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        flexGrow: 1,
        backgroundColor: "#f5f5f5",
        paddingLeft: "20px",
        paddingTop: "10px",
        paddingRight: "20px",
        paddingBottom: "10px",
      }}
      // sx={{ flexGrow: 1, borderTop: "solid 1px grey" }}
      spacing={2}
    >
      <Grid xs={12} md={4} sx={{ textAlign: "left" }}>
        <Link
          href="/contact"
          sx={{
            textDecoration: "none",
            color: "inherit",
            // paddingLeft: { xs: "18px", md: "40px" },
          }}
        >
          お問い合わせ
        </Link>
      </Grid>
      <Grid xs={12} md={4} sx={{ textAlign: { xs: "left", md: "center" } }}>
        <Link
          href="/privacyPolicy"
          sx={{
            textDecoration: "none",
            color: "inherit",
            // paddingLeft: { xs: "18px", md: 0 },
          }}
        >
          プライバシーポリシーと利用規約
        </Link>
      </Grid>
      <Grid xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
        <div>
          <Copyright />
        </div>
      </Grid>
    </Grid>
    // </Container>
  );
}
