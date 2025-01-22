import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetNumber) {
          return prevCount + 1;
        }
        clearInterval(interval);
        return targetNumber;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="text-center p-6 rounded-lg  bg-white">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#DB7EEC] to-[#42175B] bg-clip-text text-transparent">{count}+</div>
      <p className="text-lg sm:text-xl lg:text-xl font-josefin text-black">{label}</p>
    </div>
  );
};

const HappyClientsCounter = () => {
  return (
    <div className="py-10 px-4  ">
      <div className="grid grid-cols-2  gap-6 sm:grid-cols-2 lg:grid-cols-4  max-w-screen-xl mx-auto">
        {/* Counter 1 */}
        <div className="w-full">
          <Counter targetNumber={27} label="Successful Projects" />
        </div>
        {/* Counter 2 */}
        <div className="w-full ">
          <Counter targetNumber={6} label="Years of Experience" />
        </div>
        {/* Counter 3 */}
        <div className="w-full">
          <Counter targetNumber={53} label="Happy Customers" />
        </div>
        {/* Counter 4 */}
        <div className="w-full">
          <Counter targetNumber={9} label="Team Members" />
        </div>
      </div>
    </div>
  );
};

export default HappyClientsCounter;
