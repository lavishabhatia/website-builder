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
    <div className="w-full fixed top-0 bg-themecolor z-12">
      <PageWrapper>
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2.5 text-base text-white font-medium w-1/2">
            {info.map((d, i) => (
              <span key={i}>{d.info}</span>
            ))}
          </div>
          <div className="flex items-center gap-2.5 text-base text-white font-medium w-1/2 justify-end">
            {socialIcons.map(({ icon, key }) => (
              <span key={key}>{icon}</span>
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default StickeyHeader;
