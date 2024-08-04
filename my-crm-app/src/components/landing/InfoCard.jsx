import React from "react";
import Card from "../ui/card/Card";
import { cards } from "../../data/data";
import PageWrapper from "../ui/wrapper/PageWrapper";

const InfoCard = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center py-">
      <PageWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default InfoCard;
