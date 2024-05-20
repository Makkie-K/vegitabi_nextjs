import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import Layout from "/src/components/layouts/layout";
import utilStyles from "/src/styles/utils.module.css";
import { getSortedColumnsData } from "/src/lib/columns";
import Date from "/src/components/date";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Index({ allColumnsData }) {
  return (
    <Layout>
      <Head>
        <title>コラム一覧</title>
        <meta
          name="description"
          content="国内外の旅行に役立つ情報が満載のコラム一覧"
        />
        <meta name="keywords" content="旅行, 体験記, レビュー, ベジタリアン" />
        <meta property="og:url" content="https://vegitabi.com/columns" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="コラム一覧" />
        <meta
          property="og:description"
          content="国内外の旅行に役立つ情報が満載のコラム一覧"
        />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container sx={{ marginTop: "90px" }}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "lightgrey",
            marginBottom: "30px",
          }}
        >
          コラム一覧
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Grid container spacing={2}>
            {allColumnsData.map(({ id, date, title, titleJp, avatar }) => (
              <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                <Link href={`/columns/${id}`}>
                  <Card sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={`/images/columns/${id}/1.webp`}
                      alt={titleJp}
                      sx={{ aspectRatio: "1/1" }}
                    />
                    <CardHeader
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={title}
                      titleTypographyProps={{ variant: "h6" }}
                      subheader={
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: "0.8rem" }}
                        ></Typography>
                      }
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        最終更新日: <Date dateString={date} />
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                    <Collapse in={true} timeout="auto" unmountOnExit></Collapse>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allColumnsData = getSortedColumnsData();
  return {
    props: {
      allColumnsData,
    },
  };
}
