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
    <div className="w-full fixed top-0 bg-themecolor z-12">
        <div className="w-full flex items-center justify-between gap-2 py-2.5">
      <PageWrapper>
          <div className="flex items-center justify-end gap-2.5 w-1/2">
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
          <div className="flex items-center justify-end gap-2.5 w-1/2">
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
      </PageWrapper>
        </div>
    </div>
  );
};

export default StickeyHeader;
