import React from "react";
import HeroSection from "../components/landing/HeroSection";
import StickeyHeader from "../components/ui/StickeyHeader";
import Services from "../components/landing/Services";
import TeamMember from "../components/landing/TeamMember";

const LandingPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <StickeyHeader />
      <div className="flex flex-col gap-20 w-full items-center justify-center">
        <HeroSection />
        <Services />
        <TeamMember />
      </div>
    </div>
  );
};

export default LandingPage;
