import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="flex w-full md:max-w-[900px] xl:max-w-[1250px] 2xl:max-w-[1500px]">
      {children}
    </div>
  );
};

export default PageWrapper;
