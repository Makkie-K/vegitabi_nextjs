import styles from "./layout.module.css";
import Header from "./Header";

const name = "Vegitabi";
export const siteTitle = "Vegitabi";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <p>Header</p>
      {/* <Header /> */}
      <main>
        {/* <Header /> */}
        {children}
      </main>
    </div>
  );
}

export default Layout;
