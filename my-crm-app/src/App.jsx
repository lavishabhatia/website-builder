import React from "react";
import CustomCursor from "./components/CustomCursor";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainContainer from "./pages/MainContainer";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
