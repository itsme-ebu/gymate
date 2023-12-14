import React, { useState } from "react";
import { gym_logo } from "../assets";
import { NavLink } from "react-router-dom";

function Nav() {
  const [nav_trigger, setnav_trigger] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      setnav_trigger(true);
    } else {
      setnav_trigger(false);
    }
  });
  return (
    <div
      className={
        nav_trigger
          ? "bg-black w-full m-h-25 py-5 px-8 flex justify-between items-center text-white max-sm:px-4 fixed z-10 transition-all duration-100 ease-linear"
          : " bg-transparent w-full m-h-25 py-5 px-8 flex justify-between items-center text-white max-sm:px-4 fixed z-10"
      }
    >
      <div>
        <img src={gym_logo} className="w-full" />
      </div>
      <div className="mr-5 max-lg:hidden">
        <ul className="flex gap-8 font-medium">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="gallery/page-1">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/schedule/monday">Schedule</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="classes">Classes</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <i className="ri-menu-line text-2xl mr-4 hidden max-lg:block"></i>
        <i className="ri-user-line text-2xl mr-4"></i>
        <i className="ri-menu-5-line text-2xl mr-5 max-md:mr-0"></i>
        <div className="flex items-center gap-3 border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md max-md:hidden">
          <i className="ri-add-line text-lg text-white bg-[#FF0336] p-1 rounded px-2"></i>
          <h3 className="text-sm">JOIN CLASS NOW</h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
