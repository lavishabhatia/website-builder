import React, { memo } from "react";

const GetTheAppSection = () => (
  <div className="w-full sm:w-1/2 md:w-1/4 px-2">
    <h4 className="font-semibold">Get the app</h4>
    <p className="mt-2">We suggest connecting apps</p>
    <div className="flex mt-2 space-x-2">
      <button className="bg-gray-800 p-2 rounded">
        <img src="google-play-icon.png" alt="Google Play" />
      </button>
      <button className="bg-gray-800 p-2 rounded">
        <img src="app-store-icon.png" alt="App Store" />
      </button>
    </div>
  </div>
);

export default memo(GetTheAppSection);
