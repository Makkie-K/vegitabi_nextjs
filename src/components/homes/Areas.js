import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
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
          <Link href="/australia-index">
            <AreasCard
              name="オーストラリア"
              image="/images/homes/australia.jpeg"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/oman-index">
            <AreasCard name="オマーン" image="/images/homes/oman.jpeg" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/cookislands-index">
            <AreasCard
              name="クック諸島"
              image="/images/homes/cookislands.jpeg"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/uae-index">
            <AreasCard name="U.A.E" image="/images/homes/uae.jpeg" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
