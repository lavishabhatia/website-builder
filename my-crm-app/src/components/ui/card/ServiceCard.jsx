import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ d }) => {
  return (
    <div className="bg-white rounded-[40px] max-w-[550px] p-12 flex flex-col gap-7">
      <h4 className="text-black font-semibold text-2xl h-12">{d?.title}</h4>
      <h5 className="text-gray-400 font-normal text-base h-24">
        {d?.description}
      </h5>
      <div className="flex items-center gap-3">
        <PrimaryButton title={"Learn More"} />
        <GoArrowRight className="w-7 h-7 text-themecolor" />
      </div>
    </div>
  );
};

export default ServiceCard;
