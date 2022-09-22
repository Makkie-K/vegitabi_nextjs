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
          <Link href="/accomodation-index">
            <CategoriesCard
              name="宿泊施設"
              text="Accomodations"
              image="/images/homes/accomodation.jpeg"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link href="/eat-drink-index">
            <CategoriesCard
              name="飲食店"
              text="Eat & Drink"
              image="/images/homes/eat-drink.jpeg"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link href="/airplane-airport-index">
            <CategoriesCard
              name="空港・機内食"
              text="Airport & Airplane"
              image="/images/homes/airport-airplane.jpeg"
            />
          </Link>
        </Grid>
        <Grid xs={12} md={6}>
          <Link href="/others-index">
            <CategoriesCard
              name="その他"
              text="Others"
              image="/images/homes/others.jpeg"
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
