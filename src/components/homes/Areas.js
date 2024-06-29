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
    <Box sx={{ flexGrow: 1, paddingBottom: "100px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Link href="/areas/indonesia" underline="none">
            <AreasCard
              name="インドネシア"
              image="/images/homes/indonesia.webp"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/australia" underline="none">
            <AreasCard
              name="オーストラリア"
              image="/images/homes/australia.webp"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/oman" underline="none">
            <AreasCard name="オマーン" image="/images/homes/oman.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/qatar" underline="none">
            <AreasCard name="カタール" image="/images/homes/qatar.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/cook-islands" underline="none">
            <AreasCard
              name="クック諸島"
              image="/images/homes/cookislands.webp"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/thailand" underline="none">
            <AreasCard name="タイ" image="/images/homes/thailand.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/vanuatu" underline="none">
            <AreasCard name="バヌアツ" image="/images/homes/vanuatu.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/madagascar" underline="none">
            <AreasCard
              name="マダガスカル"
              image="/images/homes/madagascar.webp"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/maldives" underline="none">
            <AreasCard name="モルディブ" image="/images/homes/maldives.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/laos" underline="none">
            <AreasCard name="ラオス" image="/images/homes/laos.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/lesotho" underline="none">
            <AreasCard name="レソト" image="/images/homes/lesotho.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/japan" underline="none">
            <AreasCard name="日本" image="/images/homes/japan.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/south-africa" underline="none">
            <AreasCard
              name="南アフリカ"
              image="/images/homes/south-africa.webp"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/taiwan" underline="none">
            <AreasCard name="台湾" image="/images/homes/taiwan.webp" />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link href="/areas/uae" underline="none">
            <AreasCard name="U.A.E" image="/images/homes/uae.webp" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
