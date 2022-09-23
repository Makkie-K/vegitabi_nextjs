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
    <Container
      sx={{
        paddingTop: "9px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid
        container
        sx={{ flexGrow: 1 }}
        // sx={{ flexGrow: 1, borderTop: "solid 1px grey" }}
        spacing={2}
      >
        <Grid xs={12} md={4}>
          <Link
            href="/contact"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            お問い合わせ
          </Link>
        </Grid>
        <Grid xs={12} md={4}>
          <Link
            href="/privacyPolicy"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            プライバシーポリシーと利用規約
          </Link>
        </Grid>
        <Grid xs={12} md={4}>
          <div>
            <Copyright />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
