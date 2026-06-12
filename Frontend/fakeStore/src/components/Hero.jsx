import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-sky-200 w-screen h-180 flex justify-normal bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex flex-col w-fit items-start py-50 gap-8 px-10">
          <span className="font-bold text-6xl text-white">
            Unleash your shopping potential
          </span>
          <Link to={"/product"}>
            <button className="bg-blue-700 py-2 rounded-full px-10 text-white font-medium hover:bg-blue-800 transition-colors hover:shadow-lg">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="flex items-end justify-end w-full pb-8 px-4">
          <span className="text-2xl font-semibold text-zinc-500">
            Powered by the Fake Store API.
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
