import React from "react";
import { FaRegStar } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="w-90 rounded-xl m-10 shadow transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl">
        <div className="w-full h-60">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="product-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-3 flex flex-col items-start justify-between gap-3 px-5">
          <span className="px-2 py-0.5 text-[15px] rounded-full bg-emerald-500 text-white">
            {"men's clothing"}
          </span>
          <span className="font-medium text-xl">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </span>

          <p className="text-[16px]">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>

          <div className="flex justify-between items-center w-full">
            <span className="text-4xl font-bold">$ {190}</span>
            <span className="flex items-center justify-between gap-0.5">
              <div className="flex items-center justify-between gap-0.5 text-amber-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <span>{4.5}/5</span>
            </span>
          </div>

          {/* <button className="rounded-full bg-amber-500 p-3 text-white w-full hover:bg-amber-700 hover:shadow-xl">
            Add to Cart
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Card;
