import styles from "./layout.module.css";
import Head from "next/head";
import utilStyles from "/src/styles/utils.module.css";
import Link from "/src/components/utils/Link";
import Header from "./Header";
import Footer from "./Footer";

const name = "Vegitabi";
export const siteTitle = "Vegitabi";

function Layout({ children }) {
  return (
    <div className={styles.container}>

      <Header />
      <main className={styles.main}>{children}</main>
      {/* <main>{children}</main> */}
      <Footer />
    </div>
  );
}

export default Layout;
