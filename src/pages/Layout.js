import { Outlet } from "react-router-dom";
import NavbarDefault from "../components/header/NavbarDefault";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return <>
    <NavbarDefault />
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
