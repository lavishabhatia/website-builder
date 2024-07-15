import React, { useMemo } from "react";
import "../../css/statisticsSection.css";
import PageWrapper from "../ui/wrapper/PageWrapper";

const StatCard = React.memo(({ icon, number, label }) => (
  <div className="flex items-center gap-2">
    <data.icon className="icon-container bg-white text-purple-600 text-5xl mb-3 p-4 shadow-lg border-2 border-purple-600 border-uneven">
      {icon}
    </data.icon>
    <div className="flex flex-col">
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-lg">{label}</div>
    </div>
  </div>
));

const StatisticsSection = () => {
  const stats = useMemo(() => statsData, []);
  return (
    <div className="statistics-section bg-purple-300 py-24">
      <PageWrapper>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats?.map((stat) => (
            <StatCard
              key={stat?.id}
              icon={stat?.icon}
              number={stat?.number}
              label={stat?.label}
            />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default StatisticsSection;
