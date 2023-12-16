import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import { Link, NavLink, Outlet } from "react-router-dom";
function Gallery() {
  return (
    <>
      <HeaderBanner path="Gallery" />
      <Outlet />

      <div className="flex justify-center gap-3 my-5">
        <NavLink
          to="page-1"
          className={({ isActive }) =>
            isActive
              ? "border w-fit border-[#666] cursor-pointer px-5 text-2xl py-2 bg-[#ff0336] text-white"
              : "border w-fit border-[#666] cursor-pointer px-5 text-2xl py-2 hover:bg-[#ff0336] hover:text-white"
          }
        >
          <h2 className="">1</h2>
        </NavLink>
        <NavLink
          to="page-2"
          className={({ isActive }) =>
            `border w-fit border-[#666] cursor-pointer px-5 text-2xl py-2 ${
              isActive && " bg-[#ff0336] text-white"
            }`
          }
        >
          <h2>2</h2>
        </NavLink>

        <h2 className="border w-fit border-[#666] cursor-pointer px-4 text-2xl py-2 hover:bg-[#ff0336] hover:text-white">
          <i className="ri-arrow-right-double-line"></i>
        </h2>
      </div>
    </>
  );
}

export default Gallery;
