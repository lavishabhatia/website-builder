// src/ui/icon/Backgroundshape.jsx

import React from "react";

const Backgroundshape = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2d3748"
          fillOpacity="1"
          d="M0,256L80,266.7C160,277,320,299,480,288C640,277,800,235,960,197.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1a202c"
          fillOpacity="1"
          d="M0,320L60,314.7C120,309,240,299,360,293.3C480,288,600,288,720,293.3C840,299,960,309,1080,293.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
        </svg>
      <svg
        className="absolute bottom-50 right-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#1a202c"
          fillOpacity="1"
          d="M0,320L60,314.7C120,309,240,299,360,293.3C480,288,600,288,720,293.3C840,299,960,309,1080,293.3C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Backgroundshape;
