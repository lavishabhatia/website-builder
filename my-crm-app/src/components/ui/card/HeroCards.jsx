import React from "react";

const HeroCards = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <span className="text-green-600 font-bold">10k+</span>
      <p className="text-xs text-gray-600 mt-1">Get User Help</p>
      <p className="mt-2 md:mt-4 font-bold">Michel Richard</p>
      <p className="text-sm text-gray-600">Business Coordinator</p>
    </div>
  );
};

export default React.memo(HeroCards);
