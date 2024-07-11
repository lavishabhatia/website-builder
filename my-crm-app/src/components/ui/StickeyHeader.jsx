import React from "react";
import PageWrapper from "./wrapper/PageWrapper";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

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

const infoData = [
  { info: "Follow Us On :" },
  { info: <FaFacebookF /> },
  { info: <FaTwitter /> },
  { info: <FaLinkedinIn /> },
  { info: <RiInstagramFill /> },
  { info: <FaYoutube /> },
];

const StickeyHeader = () => {
  return (
    <div className="w-full fixed top-0 bg-themecolor">
      <PageWrapper>
        <div className="w-full flex items-center justify-between gap-2 p-3">
          <div className="flex gap-2.5 w-full">
            {info?.map((d, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-2 text-base text-white font-medium"
                >
                  {d.info}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2.5 w-full">
            {infoData?.map((d, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-2 text-base text-white font-medium"
                >
                  {d.info}
                </div>
              );
            })}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default StickeyHeader;
