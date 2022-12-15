import { Outlet } from "react-router-dom";
import NavbarPage from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarPage />
      <Outlet />
    </>
  );
};

export default Layout;
