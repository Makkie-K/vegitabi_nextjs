import styles from "./layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

const name = "Vegitabi";
export const siteTitle = "Vegitabi";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* <p>Header</p> */}
      <Header />
      <main>
        {/* <Header /> */}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
