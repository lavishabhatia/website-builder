import React, { lazy, Suspense, useMemo } from "react";
import "../../css/uniqueIdeas.css";
import prop from "../../assets/landing/prop.jpeg";
import { uniqueIdeasData } from "../../data/data";
import { IoIosReturnRight } from "react-icons/io";
const PageWrapper = lazy(() => import("../ui/wrapper/PageWrapper"));

const UniqueIdeas = () => {
  const serviceCards = useMemo(
    () =>
      uniqueIdeasData?.map((service, index) => (
        <div className="service-card w-full md:w-1/4" key={index}>
          <h3 className="text-xl mb-2 h-16">{service?.title}</h3>
          <p className="text-sm flex items-center h-32">
            {service?.description}
          </p>
          <button className="initial-btn  bg-slate-600 rounded-full w-10 h-10">
            <IoIosReturnRight className="flex items-center justify-center w-full h-8" />
          </button>
          <button className="hover-btn hidden py-12 mt-12">Learn More</button>
        </div>
      )),
    [uniqueIdeasData]
  );

  return (
    <div className="w-full bg-black flex items-center justify-center text-white">
      <section className="relative w-full bg-black text-white overflow-hidden">
        <div className="absolute inset-0 -top-20 h-full w-full">
          <img
            src={prop}
            alt="Prop image"
            className="animate-spin-slow h-96 w-96 overflow-hidden left-3"
          />
        </div>
        <div className="z-32 text-center pt-80">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
              Unique Ideas
            </span>
            <br />
            For Your Business.
          </h1>
          <button className="mt-8 py-2 px-6 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
            What We Do
          </button>
        </div>
        <div className="absolute top-0 -right-20 h-full w-full flex justify-end items-center">
          <img
            src={prop}
            alt="Prop image"
            className="animate-spin-slow h-80 w-80 overflow-hidden"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Suspense fallback={<></>}>
            <PageWrapper>
              <div className="bottom-0 left-0 right-0 mt-16 flex flex-col md:flex-row justify-between bg-black z-20">
                {serviceCards}
              </div>
            </PageWrapper>
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default UniqueIdeas;
