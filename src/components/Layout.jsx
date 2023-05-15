import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    const miDiv = document.querySelector("header");
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        miDiv.classList.add("bg-white");
      } else {
        miDiv.classList.remove("bg-white");
      }
    });
  }, []);

  return (
    <>
      <header className="fixed z-40 w-full">
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
