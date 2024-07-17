import React, { useMemo } from "react";
import "../../css/statisticsSection.css";
import PageWrapper from "../ui/wrapper/PageWrapper";
import { statsData } from "../../data/data";

const StatCard = React.memo(({ data }) => (
  <div className="icon-container flex items-center gap-2 bg-purple-100">
    <data.icon className="  text-purple-600 text-5xl w-32 h-32 p-4 " />
    <div className="flex flex-col">
      <div className="text-2xl text-black font-semibold">{data?.number}</div>
      <div className="text-lg font-medium text-black">{data?.label}</div>
    </div>
  </div>
));

const StatisticsSection = () => {
  const stats = useMemo(() => statsData, []);
  return (
    <div className=" bg-purple-300 py-24 w-full flex items-center justify-center">
      <PageWrapper>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats?.map((stat) => (
            <StatCard key={stat?.id} data={stat} />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default StatisticsSection;
