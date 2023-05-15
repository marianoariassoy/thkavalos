import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="absolute z-40 w-full">
        <TopBar />
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
