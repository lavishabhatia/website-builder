import React from "react";

const LineEffect = () => {
  return (
    <>
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
    </>
  );
};

export default LineEffect;
