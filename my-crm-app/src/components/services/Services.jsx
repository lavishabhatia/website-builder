import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative p-6 text-center">
        {/* Animated circles */}
        <div className="absolute -top-8 -left-12 h-24 w-24 rounded-full bg-purple-500 animate-pulse" />
        <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-purple-300 animate-bounce" />
        <div className="absolute bottom-0 left-1/3 h-6 w-16 rounded-full bg-purple-700 animate-spin" />
        <p className="text-sm text-purple-600">BEST MARKETING SERVICE</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-800 sm:text-6xl">
          Make The Easiest Solution For You
        </h1>
        <p className="mt-4 text-gray-500">
          Energistically harness ubiquitous imperatives without state of the art
          collaboration and idea-sharing. Monotonectally parallel task
          cross-unit experiences and front-end.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 text-white bg-purple-600 rounded-lg">
            ABOUT US
          </button>
          <button className="flex items-center px-6 py-3 text-purple-600 bg-purple-100 rounded-lg">
            <span className="mr-2 text-lg">▶</span> Watch Our Story
          </button>
        </div>
      </div>
      <div className="mt-16">
        {/* Placeholder for the puzzle pieces illustration */}
        <div className="flex justify-center items-center space-x-4">
          <div className="h-32 w-32 bg-gray-300 rounded-md" />
          <div className="h-32 w-32 bg-gray-300 rounded-md" />
          <div className="h-32 w-32 bg-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Services;
