import React from "react";

const Flower = ({ color = "bg-pink-400" }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* petals */}
      <div className="relative w-24 h-24">
        <div
          className={`absolute w-10 h-10 rounded-full ${color} top-0 left-7`}
        ></div>
        <div
          className={`absolute w-10 h-10 rounded-full ${color} top-7 left-0`}
        ></div>
        <div
          className={`absolute w-10 h-10 rounded-full ${color} top-7 right-0`}
        ></div>
        <div
          className={`absolute w-10 h-10 rounded-full ${color} bottom-0 left-7`}
        ></div>

        {/* center */}
        <div className="absolute w-6 h-6 bg-yellow-300 rounded-full top-9 left-9"></div>
      </div>

      {/* stem */}
      <div className="w-2 h-32 bg-green-600"></div>

      {/* leaves */}
      <div className="absolute bottom-10 left-2 w-6 h-3 bg-green-500 rounded-full rotate-[-30deg]"></div>
      <div className="absolute bottom-16 right-2 w-6 h-3 bg-green-500 rounded-full rotate-[30deg]"></div>
    </div>
  );
};

export default Flower;
