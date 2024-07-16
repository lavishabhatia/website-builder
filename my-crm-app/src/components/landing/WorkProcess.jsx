import React from "react";
import Backgroundshape from "../ui/icon/Backgroundshape";
import { processes } from "../../data/data";

const WorkProcess = () => {
  return (
    <div className="relative bg-gray-900 text-white p-8 overflow-hidden">
      <Backgroundshape />
      <div className="relative flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0">
        {processes?.map((process, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className="text-green-400 text-2xl mb-2">{process.title}</div>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
