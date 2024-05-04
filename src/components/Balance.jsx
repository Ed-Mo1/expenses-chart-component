import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className="text-white space-y-[2px]">
      <h4 className="font-medium text-base">My balance</h4>
      <h2 className="text-2xl font-bold">${balance}</h2>
    </div>
  );
};

export default Balance;
