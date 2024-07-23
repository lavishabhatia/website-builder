import React, { lazy, Suspense } from "react";
const HeroSection = lazy(() => import("../components/landing/HeroSection"));
const StickeyHeader = lazy(() => import("../components/ui/StickeyHeader"));
const Services = lazy(() => import("../components/landing/Services"));
const TeamMember = lazy(() => import("../components/landing/TeamMember"));
const WorkProcess = lazy(() => import("../components/landing/WorkProcess"));
const StatisticsSection = lazy(() =>
  import("../components/landing/StatisticsSection")
);
const UniqueIdeas = lazy(() => import("../components/landing/UniqueIdeas"));

const LandingPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* <StickeyHeader /> */}
      <div className="flex flex-col  w-full items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <UniqueIdeas />
          <WorkProcess />
          <Services />
          <StatisticsSection />
          <TeamMember />
        </Suspense>
      </div>
    </div>
  );
};

export default LandingPage;
