import styles from "./layout.module.css";
import Head from "next/head";
import Link from "/src/components/utils/Link";
import Header from "./Header";
import Footer from "./Footer";

const name = "Vegitabi";
export const siteTitle = "Vegitabi";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>vegitabi.com</title>
        <meta
          name="description"
          content="ベジタリアン＆ヴィーアンの方が快適に旅行するための情報が満載のウェブサイト"
        />
        <meta
          name="keywords"
          content="ベジタリアン, ヴィーガン, ビーガン, 旅行"
        />
        <meta property="og:url" content="https://vegitabi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="コラム一覧" />
        <meta
          property="og:description"
          content="ベジタリアン＆ヴィーアンの方が快適に旅行するための情報が満載のウェブサイト"
        />
        <meta property="og:site_name" content="vegitabi.com" />
        <meta
          property="og:image"
          content="https://vegitabi.com/images/ogp.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
