import { useState } from "react";
import ResturentCard from "./ResturentCard";

const totalResturent = 3

function ResturentSection() {
  return (
    <>
      <div className="bg-gradient-to-b from-orange-700 to-[#FCFCFC] h-170 w-[100] flex items-center justify-center">
        <div className="flex flex-col justify-center gap-8 p-10 w-[75%]">
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="text-4xl font-bold text-white">
              Featured Restaurants
            </h1>
            <span className="text-xl font-light text-white">
              {totalResturent} restaurants available
            </span>
          </div>
          <div className="grid grid-cols-3 items-center justify-center gap-13 h-100">
            <ResturentCard />
            <ResturentCard />
            <ResturentCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResturentSection;
