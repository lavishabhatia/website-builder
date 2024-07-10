import React from "react";

const PrimaryButton = () => {
  return (
    <button className="relative primaryButton overflow-hidden text-white px-6 py-2 rounded-full bg-green-700 hover:bg-green-900 transition-all duration-500">
      <span className="relative z-10">Get Started for Free</span>
      <span className="absolute inset-0 bg-green-900 transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out hover:scale-y-100"></span>
    </button>
  );
};

export default PrimaryButton;
