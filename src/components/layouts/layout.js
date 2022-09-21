import styles from "./layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

const name = "Vegitabi";
export const siteTitle = "Vegitabi";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
