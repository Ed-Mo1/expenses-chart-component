import React from "react";
import data from "../data.json";
import Bar from "./Bar";
const Charts = () => {
  const total = data.reduce((a, b) => a + b.amount, 0);
  return (
    <div className=" space-y-16">
      <h1 className="text-3xl max-sm:text-2xl font-semibold text-dark-brown">
        Spending - Last 7 days
      </h1>
      <div className="h-[200px] relative flex gap-2 items-end">
        {data.map(({ day, amount }, index) => {
          return <Bar key={index} day={day} amount={amount} />;
        })}
      </div>
    </div>
  );
};

export default Charts;
