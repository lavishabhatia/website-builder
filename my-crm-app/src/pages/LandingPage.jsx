import React from "react";
import HeroSection from "../components/landing/HeroSection";
import StickeyHeader from "../components/ui/StickeyHeader";
import Services from "../components/landing/Services";
import TeamMember from "../components/landing/TeamMember";
import WorkProcess from "../components/landing/WorkProcess";
import StatisticsSection from "../components/landing/StatisticsSection";
import UniqueIdeas from "../components/landing/UniqueIdeas";

const LandingPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* <StickeyHeader /> */}
      <div className="flex flex-col  w-full items-center justify-center">
        <HeroSection />
        <UniqueIdeas />
        <WorkProcess />
        <Services />

        <StatisticsSection />
        <TeamMember />
      </div>
    </div>
  );
};

export default LandingPage;
