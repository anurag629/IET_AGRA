import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/header/CustomNavbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return <>
    <CustomNavbar />
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
