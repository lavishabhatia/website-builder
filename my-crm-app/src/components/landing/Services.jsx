import React from "react";
import PageWrapper from "../ui/wrapper/PageWrapper";
import LineEffect from "../ui/icon/LineEffect";
import { servicesData } from "../../data/data";
import ServiceCard from "../ui/card/ServiceCard";

const Services = () => {
  return (
    <div className="w-full flex items-center justify-center  bg-gray-100">
      <PageWrapper>
        <div className="w-full flex flex-col items-center justify-center py-24">
          <div className="w-[300px] flex gap-3 items-center justify-center">
            <hr className="border-3 border-themecolor w-full" />
            <span className="w-full text-themecolor">Our Services</span>
            <hr className="border-3 border-themecolor w-full" />
          </div>
          <div className="flex-1 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
            <h2 className="text-[39px] font-bold mb-2">
              you Keep The
              <span className="underline-container">
                <span className="underline-animation text-themecolor ps-2">
                  CRM
                </span>
                <LineEffect />
              </span>{" "}
              Advantage
            </h2>
          </div>
          <div className="grid grid-cols-3 w-full gap-4">
            {servicesData?.map((d, i) => {
              return <ServiceCard key={i} d={d} />;
            })}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Services;
