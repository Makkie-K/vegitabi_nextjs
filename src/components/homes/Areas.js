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
          <Link
            href="/areas/indonesia"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="インドネシア"
              image="/images/homes/indonesia.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/australia"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="オーストラリア"
              image="/images/homes/australia.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/oman"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="オマーン"
              image="/images/homes/oman.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/qatar"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="カタール"
              image="/images/homes/qatar.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/cook-islands"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="クック諸島"
              image="/images/homes/cookislands.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/thailand"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="タイ"
              image="/images/homes/thailand.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/vanuatu"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="バヌアツ"
              image="/images/homes/vanuatu.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/madagascar"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="マダガスカル"
              image="/images/homes/madagascar.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/maldives"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="モルディブ"
              image="/images/homes/maldives.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/laos"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="ラオス"
              image="/images/homes/laos.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/lesotho"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="レソト"
              image="/images/homes/lesotho.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/japan"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="日本"
              image="/images/homes/japan.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/south-africa"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="南アフリカ"
              image="/images/homes/south-africa.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/taiwan"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="台湾"
              image="/images/homes/taiwan.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={3}>
          <Link
            href="/areas/uae"
            underline="none"
            sx={{ display: "block", width: "100%" }}
          >
            <AreasCard
              name="U.A.E"
              image="/images/homes/uae.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
