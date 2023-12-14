import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import { Link, Outlet } from "react-router-dom";
function Gallery() {
  return (
    <>
      <HeaderBanner path="Gallery" />
      <Outlet />

      <div className="flex justify-center gap-3 my-5">
        <Link to="page-1">
          <h2 className="border w-fit border-[#666] cursor-pointer px-5 text-2xl py-2 hover:bg-[#ff0336] hover:text-white">
            1
          </h2>
        </Link>
        <Link to="page-2">
          <h2 className="border w-fit border-[#666] cursor-pointer px-5 text-2xl py-2 hover:bg-[#ff0336] hover:text-white">
            2
          </h2>
        </Link>

        <h2 className="border w-fit border-[#666] cursor-pointer px-4 text-2xl py-2 hover:bg-[#ff0336] hover:text-white">
          <i className="ri-arrow-right-double-line"></i>
        </h2>
      </div>
    </>
  );
}

export default Gallery;
