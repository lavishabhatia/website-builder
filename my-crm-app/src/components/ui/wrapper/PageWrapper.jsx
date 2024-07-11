import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full md:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1400px]">
      {children}
    </div>
  );
};

export default PageWrapper;
