import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import StickeyHeader from "../components/ui/StickeyHeader";

const MainContainer = () => {
  return (
    <div>
      <StickeyHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainContainer;
