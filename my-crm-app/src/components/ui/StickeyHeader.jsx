import React, { useMemo } from "react";
import PageWrapper from "./wrapper/PageWrapper";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  // RiInstagramFill,
  FaYoutube,
} from "react-icons/fa";

const StickeyHeader = () => {
  const info = useMemo(
    () => [
      {
        info: "54 NJ-12, Flemington, United States",
      },
      {
        info: "+153-987-3657",
      },
      {
        info: "info@webteck.com",
      },
    ],
    []
  );

  const socialIcons = useMemo(
    () => [
      { icon: <FaFacebookF />, key: "facebook" },
      { icon: <FaTwitter />, key: "twitter" },
      { icon: <FaLinkedinIn />, key: "linkedin" },
      // { icon: <RiInstagramFill />, key: "instagram" },
      { icon: <FaYoutube />, key: "youtube" },
    ],
    []
  );

  return (
    <div className="w-full flex items-center justify-center fixed top-0 bg-themecolor z-[999999]">
      <PageWrapper>
        <div className="flex flex-col sm:flex-row items-center justify-between py-2.5 w-full px-4">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 text-base text-white font-medium w-full sm:w-1/2 justify-center sm:justify-start">
            {info?.map((d, i) => (
              <span key={i} className="block sm:inline-block">
                {d?.info}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2.5 text-base text-white font-medium w-full sm:w-1/2 justify-center sm:justify-end mt-2 sm:mt-0">
            {socialIcons?.map(({ icon, key }) => (
              <span key={key}>{icon}</span>
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default StickeyHeader;
