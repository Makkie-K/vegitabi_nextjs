import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Areas() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Item>オーストラリア</Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>オマーン</Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>クック諸島</Item>
        </Grid>
        <Grid xs={12} md={3}>
          <Item>U.A.E</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
