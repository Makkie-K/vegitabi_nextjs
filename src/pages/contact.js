import Container from "@mui/material/Container";
import Layout from "/src/components/layouts/layout";
import Box from "@mui/material/Box";

export default function Contact() {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
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
