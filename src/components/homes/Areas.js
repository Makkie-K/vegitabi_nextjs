import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import AreasCard from "./AreasCard";

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
          <AreasCard
            name="オーストラリア"
            image="/images/homes/australia.jpeg"
          />
        </Grid>
        <Grid xs={12} md={3}>
          <AreasCard name="オマーン" image="/images/homes/oman.jpeg" />
        </Grid>
        <Grid xs={12} md={3}>
          <AreasCard name="クック諸島" image="/images/homes/cookislands.jpeg" />
        </Grid>
        <Grid xs={12} md={3}>
          <AreasCard name="U.A.E" image="/images/homes/uae.jpeg" />
        </Grid>
      </Grid>
    </Box>
  );
}
