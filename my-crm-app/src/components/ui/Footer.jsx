import React, { useMemo } from "react";
import "../../css/animatedDashedLine.css";
import { fotterData } from "../../data/data";
import PageWrapper from "./wrapper/PageWrapper";

const Footer = () => {
  const memoizedFooterContent = useMemo(() => {
    return fotterData?.map((d, i) => (
      <div key={i} className="w-full sm:w-1/2 md:w-1/4 px-2">
        <h4 className="font-semibold">{d?.title}</h4>
        <hr className="animated-dash" />
        <ul className="mt-2 space-y-2">
          {d?.info?.map((info, index) => (
            <li key={index}>{info?.info}</li>
          ))}
        </ul>
      </div>
    ));
  }, [fotterData]);

  const formInput = useMemo(() => (
    <form className="mt-4 flex flex-col sm:flex-row">
      <input
        type="email"
        placeholder="Email Address"
        className="p-2 w-full sm:w-64 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
      />
      <button type="submit" className="p-2 bg-green-600 rounded-b-md sm:rounded-r-md sm:rounded-b-none">
        Subscribe
      </button>
    </form>
  ), []);

  return (
    <footer className="bg-black text-white flex flex-col items-center justify-center py-16">
      <PageWrapper>
        <div className="w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm">
                Get started with a 1 Month free trial. No purchase required.
              </p>
              {formInput}
            </div>
            <div className="flex flex-wrap w-full md:w-2/3">
              {memoizedFooterContent}
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
            </div>
          </div>
          <div className="mt-10 border-t border-gray-800 pt-4">
            <p className="text-center text-sm">
              Copyright © 2024 Themeholy. All Rights Reserved.
            </p>
          </div>
        </div>
      </PageWrapper>
    </footer>
  );
};

export default Footer;
