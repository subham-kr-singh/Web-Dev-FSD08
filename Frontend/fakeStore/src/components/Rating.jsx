import React from "react";
import { FaRegStar } from "react-icons/fa";

const Rating = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-1.5">
        <div className="flex items-center justify-between gap-0.5 text-amber-400">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>{4.5}/5</span>
      </div>

      
    </>
  );
};

export default Rating;
