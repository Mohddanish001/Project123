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
    },50); 

    return () => clearInterval(interval); 
  }, [targetNumber]);

  return (
    <div className="text-center p-6  rounded-lg shadow-md">
      <div className="text-6xl sm:text-7xl font-bold text-[#0e6938]">{count}+</div>
      <p className="text-xl sm:text-2xl font-josefin text-gray-600">{label}</p>
    </div>
  );
};

const HappyClientsCounter = () => {
  return (
    <div className="flex items-center justify-center py-10 p-4">
      <div className="flex gap-8 max-w-screen-xl w-full justify-center">
        <div className="w-full sm:w-80">
          <Counter targetNumber={27} label="Successful Projects" />
        </div>
        <div className="w-full sm:w-80">
          <Counter targetNumber={6} label="Years of Experience" />
        </div>
        <div className="w-full sm:w-80">
          <Counter targetNumber={53} label="Happy Customers" />
        </div>
        <div className="w-full sm:w-80">
          <Counter targetNumber={9} label="Team Members" />
        </div>
      </div>
    </div>
  );
};

export default HappyClientsCounter;
