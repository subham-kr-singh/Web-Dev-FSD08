import React from "react";
import { IoSearch } from "react-icons/io5";

function Hero() {
  return (
    <>
      <section className=" hero-bg-img d-flex flex-column justify-content-center align-items-center vh-70 gap-4">
        <span className="fs-1 fw-bolder text-white text-center">
          Your Favorite Food, <br /> Delivered Fast
        </span>
        <span className="text-white fs-5 fw-light">
          Order from thousands of restaurants and get it delivered to your
          doorstep
        </span>

        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-orange fw-medium px-4 p-2">Sign Up</button>
          <button className="btn btn-light fw-medium px-4 p-2">
            Order Now
          </button>
        </div>

        <div className="position-relative w-50">
          <IoSearch
            size={20}
            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
          />

          <input
            type="text"
            className="form-control ps-5 py-2 "
            placeholder="Search restaurants or dishes..."
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
