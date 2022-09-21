import Header from "./Header";
import Footer from "./Footer";
// export const siteTitle = "Vegitabi.com";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
