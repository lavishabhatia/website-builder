// src/components/WorkProcess.jsx

import React from 'react';
import Backgroundshape from '../ui/icon/Backgroundshape';

const WorkProcess = () => {
  return (
    <div className="relative bg-gray-900 text-white p-8 overflow-hidden">
      {/* SVG for the background shape */}
      <Backgroundshape />
      <div className="relative flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0">
        <div className="text-center max-w-xs">
          <div className="text-green-400 text-2xl mb-2">End-User tools</div>
          <p>
            Importing existing customer data from spreadsheets, databases, or
            legacy systems into the CRM system.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <div className="text-green-400 text-2xl mb-2">Smart target</div>
          <p>
            Providing training and support to employees to ensure they
            understand how to use the CRM system effectively.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <div className="text-green-400 text-2xl mb-2">Landing texting</div>
          <p>
            CRM systems often integrate with other business applications and
            systems, such as marketing automation platforms.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <div className="text-green-400 text-2xl mb-2">Powerful integration</div>
          <p>
            Researching and evaluating CRM vendors and solutions based on
            factors such as features, pricing, scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
