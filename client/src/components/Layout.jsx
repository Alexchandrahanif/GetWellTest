import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarPage from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarPage />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
