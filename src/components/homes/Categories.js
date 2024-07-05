import * as React from "react";
import { useRouter } from "next/router";
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

const categories = [
  {
    href: "/categories/accomodation",
    name: "宿泊施設",
    text: "Accomodations",
    image: "/images/homes/accomodation.webp",
    imgHeight: 200,
    imgWidth: 300,
  },
  {
    href: "/categories/eat-drink",
    name: "飲食店",
    text: "Eat & Drink",
    image: "/images/homes/eat-drink.webp",
    imgHeight: 200,
    imgWidth: 300,
  },
  {
    href: "/categories/airport",
    name: "空港・機内食",
    text: "Airport & Airplane",
    image: "/images/homes/airport-airplane.webp",
    imgHeight: 200,
    imgWidth: 300,
  },
  {
    href: "/categories/other",
    name: "その他",
    text: "Others",
    image: "/images/homes/others.webp",
    imgHeight: 200,
    imgWidth: 300,
  },
];

export default function Categories() {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const language = pathname.slice(0, 3);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid key={category.href} xs={12} md={6}>
            <Link href={category.href}>
              {language === "/en" ? (
                <CategoriesCard
                  // name={category.name}
                  text={category.text}
                  image={category.image}
                  imgHeight={category.imgHeight}
                  imgWidth={category.imgWidth}
                />
              ) : (
                <CategoriesCard
                  name={category.name}
                  // text={category.text}
                  image={category.image}
                  imgHeight={category.imgHeight}
                  imgWidth={category.imgWidth}
                />
              )}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
