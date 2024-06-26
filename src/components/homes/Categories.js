import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";
import CategoriesCard from "./CategoriesCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Categories() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Link href="/categories/accomodation">
            <CategoriesCard
              name="宿泊施設"
              text="Accomodations"
              image="/images/homes/accomodation.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link href="/categories/eat-drink">
            <CategoriesCard
              name="飲食店"
              text="Eat & Drink"
              image="/images/homes/eat-drink.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link href="/categories/airport">
            <CategoriesCard
              name="空港・機内食"
              text="Airport & Airplane"
              image="/images/homes/airport-airplane.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link href="/categories/other">
            <CategoriesCard
              name="その他"
              text="Others"
              image="/images/homes/others.webp"
              imgHeight={200}
              imgWidth={300}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
