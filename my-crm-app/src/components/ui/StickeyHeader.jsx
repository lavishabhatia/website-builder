import React from "react";
const info = [
  {
    info: "54 NJ-12, Flemington, United States",
  },
  {
    info: "+153-987-3657",
  },
  {
    info: "info@webteck.com",
  },
];

const StickeyHeader = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-2 ">
        {info?.map((d, i) => {
          return (
            <div key={i} className="flex gap-2 text-sm text-gray-500">
              {d.info}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StickeyHeader;
