import React, { useEffect, useState } from "react";
import PageWrapper from "./ui/wrapper/PageWrapper";
import HeroCards from "./ui/HeroCards";
import PrimaryButton from "./ui/button/PrimaryButton";

const HeroSection = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const moveBox = () => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + 1));
    };
    const interval = setInterval(moveBox, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col w-full items-center justify-center md:flex-row p-8 bg-white shadow-md rounded-lg ">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
          <span className="text-md rounded-2xl border border-green-600 bg-green-300/5 px-4 text-green-900 font-medium py-1">
            Modern & Scalable CRM
          </span>
          <h2 className="text-[59px] font-bold mb-2">
            Simple{" "}
            <span className="underline-container">
              <span className="underline-animation">CRM</span>
              <svg
                width="90"
                height="10"
                viewBox="0 0 100 10"
                className="underline-svg"
              >
                <path
                  d="M 0 5 Q 50 0, 100 5"
                  stroke="#16a34a"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
            </span>{" "}
            Solution For Your Business
          </h2>
          <p className="text-gray-600 mb-4">
            Build customer relationships with CRM tools that can accommodate all
            needs and also integrated.
          </p>
          <PrimaryButton />
        </div>
        <div className="flex-1 text-center md:text-right relative">
          <div className="relative inline-block">
            <img
              src="/path/to/your/image.png"
              alt="Person"
              className="rounded-full mb-2 md:mb-0"
            />
            <div
              className="absolute top-0 right-0 w-[200px] bg-white p-2 rounded-lg shadow-md"
              style={{ transform: `translateX(${position}px)` }}
            >
              <HeroCards />
            </div>
          </div>
          <p className="mt-2 md:mt-4 font-bold">Michel Richard</p>
          <p className="text-sm text-gray-600">Business Coordinator</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HeroSection;
