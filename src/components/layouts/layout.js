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
        {/* 他のメタデータ */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        /> */}
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
