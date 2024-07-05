import Head from "next/head";
import Container from "@mui/material/Container";
import Layout from "/src/components/layouts/layout";
import Box from "@mui/material/Box";

export default function ContactEn() {
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Contact" />
        <meta name="keywords" content="Vegetarian, Vegan, Enquiry, Inquiry" />
        <meta property="og:url" content="https://vegitabi.com/en/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="home" />
        <meta
          property="og:description"
          content="Contact page of vegitabi.com"
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
            src="https://docs.google.com/forms/d/e/1FAIpQLSeuGBRXt61hVJ2P89BrR_nW2homeCgPCkC_b8vfOH1kFHvZ5Q/viewform?embedded=true"
            width="640"
            height="801"
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
