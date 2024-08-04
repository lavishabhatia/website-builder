import React, { lazy } from "react";
import { servicesData } from "../../data/data";
import { Heading } from "../ui/Headning";
const PageWrapper = lazy(() => import("../ui/wrapper/PageWrapper"));
const LineEffect = lazy(() => import("../ui/icon/LineEffect"));
const ServiceCard = lazy(() => import("../ui/card/ServiceCard"));

const SectionHeader = () => (
  <div className="flex-1 pb-16 md:mb-0 md:mr-6 text-center md:text-left">
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
    <div className="w-full flex items-center justify-center bg-gray-100">
      <PageWrapper>
        <div className="w-full flex flex-col items-center justify-center py-32 ">
          <Heading text="Our Services" className={"pb-12"} />
          <SectionHeader />
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-7">
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
