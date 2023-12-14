import React from "react";
import { footer_logo } from "../assets";

function Footer() {
  return (
    <div className="w-full min-h-[70vh] flex justify-between px-10 items-center max-md:flex-col max-md:gap-8 py-8">
      <div className="w-[40%] max-md:w-full">
        <img src={footer_logo} />
        <p className="text-[#646464] my-5 px-2 font-medium">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className="my-5 flex items-center gap-5">
          <i className="ri-facebook-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white"></i>
          <i className="ri-twitter-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white"></i>
          <i className="ri-instagram-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white"></i>
          <i className="ri-youtube-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white"></i>
        </div>
        <p className="font-medium text-[#646464]">
          Privacy Policy | © 2023 Gymate
        </p>
      </div>
      <div className="w-[60%] flex justify-around max-md:flex-col max-md:w-full max-md:gap-8">
        <div className="flex flex-col gap-5 ">
          <h2 className="text-2xl border-b-4 border-[#FF0336] w-fit">
            Our Classes
          </h2>
          <p className="font-medium text-[#646464]">Fitness Classes</p>
          <p className="font-medium text-[#646464]">Aerobics Classes</p>
          <p className="font-medium text-[#646464]">Power Yoga</p>
          <p className="font-medium text-[#646464]">Learn Machines</p>
          <p className="font-medium text-[#646464]">Full-body Strength</p>
        </div>
        <div className="flex flex-col gap-5 ">
          <h2 className="text-2xl border-b-4 border-[#FF0336] w-fit">
            Working Hours
          </h2>
          <p className="font-bold text-[#646464]">Monday - Friday:</p>
          <p className="font-medium text-[#646464]">7:00am - 21:00pm</p>
          <p className="font-bold text-[#646464]">Saturday:</p>
          <p className="font-medium text-[#646464]">7:00am - 19:00pm</p>
          <p className="font-bold text-[#646464]">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
