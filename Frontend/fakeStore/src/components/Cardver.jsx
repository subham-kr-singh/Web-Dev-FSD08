import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Cardver = () => {
  return (
    <>
      <div className="flex p-3 m-10">
        <div className="w-1/2 h-70">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="product-image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <span className="px-2 py-0.5 text-[15px] rounded-full bg-emerald-500 text-white">
            {"men's clothing"}
          </span>
          <span className="text-2xl font-medium">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </span>

          <p className="text-[16px]">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>

          <span className="flex items-center justify-between gap-1.5">
            <div className="flex items-center justify-between gap-0.5 text-amber-400">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <span className="font-medium">{4.5}/5</span>
            <span className="font-light">({120} reviews)</span>
          </span>

          <div className="flex items-center justify-between w-full">
            <span className="text-3xl font-bold">$ {109.95}</span>
            <button className="bg-amber-500 p-3 px-5 rounded-full w-1/3 hover:bg-amber-600 hover:shadow-xl text-white flex items-center justify-center gap-1.5">
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
