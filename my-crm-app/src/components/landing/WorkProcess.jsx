import React, { lazy, memo, Suspense } from "react";
import PropTypes from "prop-types";
import { processes } from "../../data/data";
import "../../css/workProcess.css";
const PageWrapper = lazy(() => import("../ui/wrapper/PageWrapper"));
const ProcessItem = lazy(() => import("../ui/card/ProcessItem"));

const WorkProcess = () => {
  return (
    <div className="relative bg-gray-900 text-white p-8 w-full flex items-center justify-center overflow-hidden mt-10">
      {/* <Backgroundshape /> */}
      <PageWrapper>
        <div className="relative flex w-full flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-20">
          <Suspense fallback={<div>Loading...</div>}>
            {processes?.map(({ icon: Icon, title, description }) => (
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <div className="icon-container relative w-16 h-16">
                  <Icon className="text-3xl text-green-400" />
                </div>
                <div className="text-green-400 text-2xl mb-2 text-center">
                  {title}
                </div>
                <p className="text-center">{description}</p>
              </div>
            ))}
          </Suspense>
        </div>
      </PageWrapper>
    </div>
  );
};

// Optional: Use PropTypes for type checking
WorkProcess.propTypes = {
  processes: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default memo(WorkProcess);
