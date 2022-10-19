import Container from "@mui/material/Container";
import Layout from "/src/components/layouts/layout";
import Box from "@mui/material/Box";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        <Box sx={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
          <img
            src="/images/homes/privacy-policy4.jpg"
            width="100%"
            sx={{ padding: 0 }}
          ></img>
        </Box>
      </Container>
    </Layout>
  );
}
