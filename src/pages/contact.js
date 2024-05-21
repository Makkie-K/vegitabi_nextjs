import Head from "next/head";
import Container from "@mui/material/Container";
import Layout from "/src/components/layouts/layout";
import Box from "@mui/material/Box";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>お問い合わせ</title>
        <meta name="description" content="お問い合わせ" />
        <meta
          name="keywords"
          content="ベジタリアン, ヴィーガン, ビーガン, お問い合わせ"
        />
        <meta property="og:url" content="https://vegitabi.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="home" />
        <meta
          property="og:description"
          content="vegitabi.comのお問い合わせフォーム"
        />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container maxWidth="md" sx={{ marginTop: "100px" }}>
        <Box sx={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScUsjM2jWVHt4v0CzoDRHSAwrgRutOZNBQR0oDngsKDclEu-g/viewform?embedded=true"
            width="100%"
            height="677"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            読み込んでいます…
          </iframe>
        </Box>
      </Container>
    </Layout>
  );
}
