import React from "react";
import Rating from "./Rating";
import { FaCartShopping } from "react-icons/fa6";

const Cardver = ({ product }) => {
  product = { title, price, description, category, image, rating };
  return (
    <>
      <div className="flex p-3 m-10">
        <div className="w-1/2 h-70">
          <img
            src={image}
            alt="product-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <span className="px-2 py-0.5 text-sm rounded-full bg-emerald-500 text-white">
            {"men's clothing"}
          </span>
          <span className="text-2xl font-medium">{title}</span>
          <p className="text-[16px]">{description}</p>
          <span className="flex gap-1">
            <Rating />
            <span className="font-light">({rating.count} reviews)</span>
          </span>
          <div className="flex items-center justify-between w-full">
            <span className="text-3xl font-bold">$ {price}</span>
            <button className="bg-amber-500 p-3 px-5 rounded-full w-1/3 hover:bg-amber-600 transition-colors hover:shadow-lg text-white flex items-center justify-center gap-1.5">
              <span>
                <FaCartShopping />
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardver;
