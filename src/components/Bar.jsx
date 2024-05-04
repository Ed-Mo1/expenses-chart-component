import { useState } from "react";
const Bar = ({ day, amount }) => {
  const height = `${amount * 2}%`;
  const [showMount, setShowMount] = useState(false);
  return (
    <div className="relative h-full w-full flex flex-col justify-end">
      <div
        onMouseEnter={() => setShowMount(true)}
        onMouseLeave={() => setShowMount(false)}
        style={{ height }}
        className={`relative hover:bg-opacity-50 cursor-pointer w-full ${
          day === "wed" ? "bg-cyan" : "bg-soft-red"
        } rounded`}
      >
        {showMount && (
          <h2 className="text-sm text-center min-w-full absolute top-[-30px] left-1/2 -translate-x-1/2 bg-dark-brown text-white p-[1px] rounded">
            ${amount}
          </h2>
        )}
      </div>
      <h3 className="text-center text-medium-brown">{day}</h3>
    </div>
  );
};

export default Bar;
