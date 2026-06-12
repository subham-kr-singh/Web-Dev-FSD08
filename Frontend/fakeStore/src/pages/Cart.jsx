import React, { useState } from "react";

import CartCard from "../components/CartCard";

// const [count, setCount] = useState(0);

const Cart = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-10 bg-stone-100 px-15 py-10">
        <span className="text-3xl font-bold">My Cart</span>
        <div className="flex justify-between items-center w-full gap-10">
          <div className=" w-5xl">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className=" w-100 bg-white rounded-2xl flex flex-col p-10 items-start justify-center shadow gap-5">
            <span className="text-3xl font-bold">Order Summary</span>

            <hr class="w-full h-0.5 bg-gray-300 border-0 rounded" />

            <div className="flex flex-col w-full">
              <div className="flex justify-between w-full items-center [&_span]:font-medium">
                <span>Subtotal</span>
                <span>$ {190}</span>
              </div>

              <div className="flex justify-between w-full items-center [&_span]:font-medium">
                <span>Estimated Shipping</span>
                <span>$ {190}</span>
              </div>
              <div className="flex justify-between w-full items-center [&_span]:font-medium">
                <span>Estimated Tax</span>
                <span>$ {190}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center">
              <span className="font-medium">Promo code</span>
              <div className="flex justify-center items-center gap-2">
                <input
                  type="text"
                  name="promoCode"
                  className="px-1.5 py-1 rounded border-[0.2px]"
                />
                <button className="bg-amber-500 px-4 py-1 rounded text-white hover:bg-amber-600 transition-colors hover:shadow-lg">
                  Apply
                </button>
              </div>
            </div>

            <hr class="w-full h-0.5 bg-gray-300 border-0 rounded" />

            <div className="flex justify-between w-full items-center [&_span]:font-bold [&_span]:text-3xl">
              <span>Total</span>
              <span>$ {190}</span>
            </div>

            <button className="text-white bg-amber-500 hover:bg-amber-600 transition-colors hover:shadow-lg rounded-xl w-full py-3">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
