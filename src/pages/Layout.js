// import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import CustomNavbar from "../components/header/CustomNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return <>
    {/* <CssBaseline /> */}
    <Navbar />
    {/* <CustomNavbar /> */}
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
