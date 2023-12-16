import React, { useState } from "react";
import { footer_logo, gym_logo } from "../assets";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [nav_trigger, setnav_trigger] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 30) {
      setnav_trigger(true);
    } else {
      setnav_trigger(false);
    }
  });

  const [popup, setPopup] = useState(false);
  const [mobile_nav, setMobile_nav] = useState(false);
  return (
    <div
      className={` w-full m-h-25 py-5 px-8 flex justify-between items-center text-white max-sm:px-4 fixed z-10 ${
        nav_trigger ? " bg-black" : " bg-transparent"
      }`}
    >
      <div>
        <NavLink to="/">
          {" "}
          <img src={gym_logo} className="w-full" />
        </NavLink>
      </div>
      <div className="mr-5 max-lg:hidden">
        <ul className="flex gap-8 font-medium">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="gallery/page-1"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule/monday"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="classes"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "text-[#ff0336]" : " hover:text-[#ff0336]"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <i
          className="ri-menu-line text-2xl mr-4 hidden max-lg:block cursor-pointer"
          onClick={() => setMobile_nav(true)}
        ></i>
        <NavLink to="signup">
          {" "}
          <i className="ri-user-line text-2xl mr-4"></i>
        </NavLink>
        <i
          className="ri-menu-5-line text-2xl mr-5 max-md:mr-0 cursor-pointer"
          onClick={() => setPopup(true)}
        ></i>
        <Link to="contact">
          <div className="flex items-center gap-3 border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md max-md:hidden">
            <i className="ri-add-line text-lg text-white bg-[#FF0336] p-1 rounded px-2"></i>
            <h3 className="text-sm">JOIN CLASS NOW</h3>
          </div>
        </Link>
      </div>
      {/* PopUp Section  */}
      <div
        className={`bg-white w-[34%] h-screen absolute top-0 transition-all duration-500 overflow-y-auto p-10 max-lg:w-[50%] max-md:w-full ${
          popup ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="w-full min-h-screen text-black">
          <div className="flex justify-between items-center">
            <img src={footer_logo} className=" w-32" />
            <i
              className="ri-close-fill text-[#ff0336] text-4xl font-bold cursor-pointer"
              onClick={() => setPopup(false)}
            ></i>
          </div>
          <div className="my-14">
            <h2 className="text-xl">About Us</h2>
            <p className="my-4 text-[#545454] font-medium">
              Find out who we are and what makes us unique. We are a
              community-driven gym committed to providing personalized fitness
              experiences for all levels of fitness enthusiasts in a welcoming
              and supportive environment.
            </p>
          </div>
          <div>
            <h2 className="text-xl">Gallery</h2>
            <div className="grid grid-cols-3 gap-3 my-5">
              <img
                src="https://images.pexels.com/photos/15300123/pexels-photo-15300123/free-photo-of-woman-wearing-a-black-top-and-a-cycling-shorts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-24 object-cover rounded-lg "
              />
              <img
                src="https://images.pexels.com/photos/2628207/pexels-photo-2628207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-24 object-cover rounded-lg "
              />
              <img
                src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-full h-24 object-cover rounded-lg "
              />
              <img
                src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-24 object-cover rounded-lg "
              />
              <img
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-24 object-cover rounded-lg "
              />
              <img
                src="https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-24 object-cover rounded-lg "
              />
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-xl my-4">Contact Info</h2>
            <p className="font-medium text-[#646464] hover:text-[#ff0336] cursor-pointer my-2">
              <i className="ri-map-pin-fill text-xl text-[#ff0336] mr-2"></i>59
              Street, House Newyork City
            </p>
            <p className="font-medium text-[#646464] hover:text-[#ff0336] cursor-pointer my-2">
              <i className="ri-phone-fill text-xl text-[#ff0336] mr-2"></i>
              +123-678800090
            </p>
            <p className="font-medium text-[#646464] hover:text-[#ff0336] cursor-pointer my-2">
              <i className="ri-mail-fill text-xl text-[#ff0336] mr-2"></i>
              gymate@gymail.com
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-xl">Follow Us</h2>
            <div className="my-4 flex gap-4 items-center">
              <i className="ri-facebook-fill text-2xl py-2 px-3 cursor-pointer text-white rounded-full bg-[#ff0336]"></i>
              <i className="ri-twitter-fill text-2xl py-2 px-3 cursor-pointer text-white rounded-full bg-[#ff0336]"></i>
              <i className="ri-instagram-fill text-2xl py-2 px-3 cursor-pointer text-white rounded-full bg-[#ff0336]"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile_nav_menu ${mobile_nav && "show_mobile_nav"}`}>
        <i
          className="ri-close-line text-4xl text-[#ff0336] absolute top-10 right-10 font-semibold cursor-pointer"
          onClick={() => setMobile_nav(false)}
        ></i>
        <div className="text-black text-2xl flex flex-col gap-6 text-center w-full h-full justify-center">
          <Link onClick={() => setMobile_nav(false)} to="">
            Home
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="about">
            About
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="/schedule/monday">
            Schedule
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="gallery/page-1">
            Gallery
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="blog">
            Blog
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="contact">
            Contact
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="pricing">
            Pricing
          </Link>
          <Link onClick={() => setMobile_nav(false)} to="classes">
            Classes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
