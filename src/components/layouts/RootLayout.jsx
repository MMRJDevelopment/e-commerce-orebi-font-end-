import Navigation from "../Navber/Navigation";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default RootLayout;
