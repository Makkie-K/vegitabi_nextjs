import Head from "next/head";
import Container from "@mui/material/Container";
import Layout from "/src/components/layouts/layout";
import Box from "@mui/material/Box";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy & Terms of Service</title>
        <meta name="description" content="プライバシーポリシーと利用規約" />
        <meta
          name="keywords"
          content="Terms of Service, Privacy-Policy, vegitabi, vegitabi.com"
        />
        <meta
          property="og:url"
          content="https://vegitabi.com/en/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy" />
        <meta
          property="og:description"
          content="Privacy Policy & Terms of Use"
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
          <h1>Privacy Policy and Terms of Use</h1>
          <h2>Use of Personal Information</h2>
          <p>
            At this website, when you submit personal information such as your
            name and email address via email inquiries, we will use this
            information solely to respond to your inquiries and to provide
            necessary information via email.
          </p>
          <h2>Disclosure of Personal Information to Third Parties</h2>
          <p>
            We manage personal information appropriately and will not disclose
            it to third parties except in the following cases:
          </p>
          <li>With the consent of the individual</li>
          <li>
            When disclosure is necessary to comply with laws or regulations
          </li>
          <h2>
            Disclosure, Correction, Addition, Deletion, and Suspension of Use of
            Personal Information
          </h2>
          <p>
            Upon request from the individual, after confirming their identity,
            we will promptly respond to requests for disclosure, addition,
            deletion, or suspension of use of personal data.
          </p>
          <h2>Access Analysis Tools</h2>
          <p>
            This website uses Google Analytics, a web analytics service provided
            by Google, Inc. Google Analytics uses first-party cookies to collect
            traffic data. The data collected is anonymous and does not identify
            individuals. You can refuse the collection of data by disabling
            cookies in your browser settings.
          </p>
          <h2>Disclaimer</h2>
          <p>
            We are not responsible for the information or services provided on
            other websites accessed through links or banners from this site.
            While we strive to provide accurate information on this site, there
            may be inaccuracies or outdated information. We cannot be held
            liable for any damages resulting from the content posted on this
            site.
          </p>
          <h2>Changes to Privacy Policy</h2>
          <p>
            We comply with Japanese laws regarding personal information and
            regularly review and improve this policy. Any revised privacy policy
            will be disclosed on this page.
          </p>
          <h2>Copyright</h2>
          <p>
            We retain the copyright for the information posted on this site. You
            may freely quote from our site articles with proper attribution.
            However, full-text reproduction is prohibited. We reserve the right
            to change the scope of permissible quotations without prior notice.
          </p>
          <p>Latest update 1st of April, 2024</p>
        </Box>
      </Container>
    </Layout>
  );
}
