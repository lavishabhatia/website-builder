import React, { lazy } from "react";
import { servicesData } from "../../data/data";
const PageWrapper = lazy(() => "../ui/wrapper/PageWrapper");
const LineEffect = lazy(() => "../ui/icon/LineEffect");
const Heading = lazy(() => import("../ui/Heading"));
const ServiceCard = lazy(() => import("../ui/card/ServiceCard"));

const SectionHeader = () => (
  <div className="flex-1 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
    <h2 className="text-[39px] font-bold mb-2">
      You Keep The
      <span className="underline-container">
        <span className="underline-animation text-themecolor ps-2">CRM</span>
        <LineEffect />
      </span>{" "}
      Advantage
    </h2>
  </div>
);

const Services = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-100 mt-10">
      <PageWrapper>
        <div className="w-full flex flex-col items-center justify-center py-32 ">
          <Heading text="Our Services" />
          <SectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            {servicesData?.map((d, i) => (
              <ServiceCard key={i} d={d} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Services;
