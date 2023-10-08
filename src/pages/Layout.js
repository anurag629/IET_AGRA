import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/header/CustomNavbar";
import NavbarWithMegaMenu from "../components/header/NavbarDefault";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return <>
    {/* <CustomNavbar /> */}
    <NavbarWithMegaMenu />
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
