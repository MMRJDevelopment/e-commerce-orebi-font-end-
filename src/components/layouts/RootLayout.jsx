import Navigation from "../Navber/Navigation";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const RootLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
