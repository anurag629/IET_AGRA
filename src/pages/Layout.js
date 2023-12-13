import { Outlet } from "react-router-dom";
import NavbarDefault from "../components/header/NavbarDefault";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return <>
    {/* <NavbarDefault /> */}
    <Navbar />
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
