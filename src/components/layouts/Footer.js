import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Copyright from "/src/components/utils/Copyright";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, borderTop: "solid 1px grey" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <div>お問い合わせ</div>
        </Grid>
        <Grid xs={12} md={4}>
          <div>プライバシーポリシーと利用規約</div>
        </Grid>
        <Grid xs={12} md={4}>
          <div>
            <Copyright />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
