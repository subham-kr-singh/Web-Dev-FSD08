import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartCard = () => {
  // 1. Moved state inside the component and used camelCase
  const [count, setCount] = useState(2);
  const unitPrice = 120;

  // 2. Safely decrement preventing negative quantities
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="h-50 w-full bg-white flex justify-between items-center px-3 border border-zinc-200">
      {/* Product Information Section */}
      <div className="flex items-center gap-4 flex-1">
        <div className="w-24 h-24 flex-shrink-0">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="text-xl font-medium line-clamp-1">
            Fjallraven - Foldsack No. 1 Backpack
          </span>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-amber-400">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <span className="text-sm text-gray-500">(4.5)</span>
          </div>
          <span className="text-xl font-bold">${unitPrice}</span>
        </div>
      </div>

      {/* Actions and Pricing Section */}
      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center gap-3">
          <button onClick={handleDecrement} disabled={count <= 1}>
            <FaSquareMinus
              className={`text-[32px] ${count <= 1 ? "text-zinc-200" : "text-zinc-400"}`}
            />
          </button>
          <span className="text-xl font-semibold w-6 text-center">{count}</span>
          <button onClick={() => setCount(count + 1)}>
            <MdAddBox className="text-4xl text-zinc-400" />
          </button>
        </div>
        {/* 3. Dynamically calculate total cost */}
        <span className="text-2xl font-bold w-24 text-right">
          ${(unitPrice * count).toFixed(2)}
        </span>
        <button className="hover:scale-110 transition-transform">
          <RiDeleteBin6Line className="text-2xl text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
