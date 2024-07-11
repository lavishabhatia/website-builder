import React from "react";
import HeroSection from "../components/HeroSection";
import StickeyHeader from "../components/ui/StickeyHeader";

const LandingPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <StickeyHeader />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
