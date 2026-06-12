import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiUserCircle } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <>
      <div className="p-8 flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center justify-center gap-2 text-2xl">
            <FaStore />
            <span className="font-semibold">FakeStore</span>
          </div>
        </Link>

        <div className="flex justify-center items-center gap-6 *:hover:underline *:underline-offset-13 *:text-[18px] *:decoration-sky-800 *:decoration-2">
          <Link to={"/"}>Home</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="relative w-full max-w-md">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <IoIosSearch />
            </div>

            <input
              type="text"
              name="search"
              placeholder="Search Product.."
              className="border rounded-full px-3 py-2 w-66 pr-10 pl-10 bg-zinc-50"
            />
          </div>

          <Link to={"/cart"}>
            <MdOutlineShoppingCart className="text-3xl" />
          </Link>
          <PiUserCircle className="text-5xl font-bold" />
        </div>
      </div>
    </>
  );
};

export default Header;
