import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    <div className="relative bg-white z-40 p-8 rounded-xl shadow-md text-center transition transform hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <button className="bg-blue-500 hover:bg-blue-900 text-white p-4 rounded-full shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-0 w-full h-full bg-gray-100 opacity-0 hover:opacity-50 transition-opacity rounded-xl"></div>
    </div>
  );
};

export default Card;
