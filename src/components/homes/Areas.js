import * as React from "react";
import { useRouter } from "next/router";
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

const areas = [
  {
    name: "インドネシア",
    text: "Indonesia",
    href: "/areas/indonesia",
    image: "/images/homes/indonesia.webp",
  },
  {
    name: "オーストラリア",
    text: "Australia",
    href: "/areas/australia",
    image: "/images/homes/australia.webp",
  },
  {
    name: "オマーン",
    text: "Oman",
    href: "/areas/oman",
    image: "/images/homes/oman.webp",
  },
  {
    name: "カタール",
    text: "Qatar",
    href: "/areas/qatar",
    image: "/images/homes/qatar.webp",
  },
  {
    name: "クック諸島",
    text: "Cook Islands",
    href: "/areas/cook-islands",
    image: "/images/homes/cookislands.webp",
  },
  {
    name: "タイ",
    text: "Thailand",
    href: "/areas/thailand",
    image: "/images/homes/thailand.webp",
  },
  {
    name: "バヌアツ",
    text: "Vanuatu",
    href: "/areas/vanuatu",
    image: "/images/homes/vanuatu.webp",
  },
  {
    name: "マダガスカル",
    text: "Madagascar",
    href: "/areas/madagascar",
    image: "/images/homes/madagascar.webp",
  },
  {
    name: "モルディブ",
    text: "Maldives",
    href: "/areas/maldives",
    image: "/images/homes/maldives.webp",
  },
  {
    name: "ラオス",
    text: "Laos",
    href: "/areas/laos",
    image: "/images/homes/laos.webp",
  },
  {
    name: "レソト",
    text: "Lesotho",
    href: "/areas/lesotho",
    image: "/images/homes/lesotho.webp",
  },
  {
    name: "日本",
    text: "Japan",
    href: "/areas/japan",
    image: "/images/homes/japan.webp",
  },
  {
    name: "南アフリカ",
    text: "South Africa",
    href: "/areas/south-africa",
    image: "/images/homes/south-africa.webp",
  },
  {
    name: "台湾",
    text: "Taiwan",
    href: "/areas/taiwan",
    image: "/images/homes/taiwan.webp",
  },
  {
    name: "アラブ首長国連邦",
    text: "U.A.E",
    href: "/areas/uae",
    image: "/images/homes/uae.webp",
  },
];

export default function Areas() {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const language = pathname.slice(0, 3);
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: "100px" }}>
      <Grid container spacing={2}>
        {areas.map((area, index) => (
          <Grid key={index} xs={12} md={3}>
            <Link
              href={area.href}
              underline="none"
              sx={{ display: "block", width: "100%" }}
            >
              {language === "/en" ? (
                <AreasCard
                  name={area.text}
                  image={area.image}
                  imgHeight={200}
                  imgWidth={300}
                />
              ) : (
                <AreasCard
                  name={area.name}
                  image={area.image}
                  imgHeight={200}
                  imgWidth={300}
                />
              )}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
