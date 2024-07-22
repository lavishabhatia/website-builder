import React, { lazy, memo } from "react";
import PropTypes from "prop-types";
import { processes } from "../../data/data";
import "../../css/workProcess.css";
const ProcessItem = lazy(() => import("../ui/card/ProcessItem"));

const WorkProcess = () => {
  return (
    <div className="relative bg-gray-900 text-white p-8 w-full flex items-center justify-center overflow-hidden mt-10">
      {/* <Backgroundshape /> */}
      <PageWrapper>
        <div className="relative flex w-full flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-20">
          <Suspense fallback={<div>Loading...</div>}>
            {processes?.map((process) => (
              <ProcessItem
                key={process.title} // Assuming title is unique; if not, use a unique ID
                {...process}
              />
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
