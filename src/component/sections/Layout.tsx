import { Outlet } from "react-router-dom";
import { Header } from "../utils/helper";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
