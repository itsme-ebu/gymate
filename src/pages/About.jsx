import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import {
  weightlifter_icon,
  equpments_icon,
  gym_icon,
  girl_bg_red,
  girl_text_bg,
  girl_run,
  wind_icon,
  about_img_one,
  target_icon,
  about_img_two,
  history_icon,
} from "../assets";
import Pricing from "../components/Pricing";
function About() {
  return (
    <div>
      <HeaderBanner path="About" />
      <section className="section2 py-10">
        <div className="grid grid-cols-2 gap-8 py-20 px-8 max-lg:grid-cols-1 max-sm:px-4">
          <div className=" max-md:text-center">
            <p className="my-5 red_bg relative z-[1] w-48 text-center font-bold text-white max-md:mx-auto">
              WHO WE ARE
            </p>
            <h2 className="text-4xl my-4">
              Take Your Health And Body To Next Level
            </h2>
            <p className=" font-medium ">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="grid grid-cols-3 my-8 text-center max-md:grid-cols-1 max-md:px-14">
              <div className="lg:border_right py-5">
                <img src={weightlifter_icon} className="w-16 mx-auto mb-5" />
                <h2 className="text-xl">PROFESSIONAL TRAINERS</h2>
              </div>
              <div className="lg:border_right py-5">
                <img src={equpments_icon} className="w-16 mx-auto mb-5" />
                <h2 className="text-xl">MODERN EQUIPMENTS</h2>
              </div>
              <div className="py-5">
                <img src={gym_icon} className="w-16 mx-auto mb-5" />
                <h2 className="text-xl">FANCY GYM MACHINES</h2>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#3F3f3F] hover:bg-[#FF0336] text-white font-bold uppercase block max-sm:mx-auto">
              Take a tour
              <i className="ri-arrow-right-line text-xl font-thin text-white ml-3"></i>
            </button>{" "}
          </div>
          <div className=" relative px-4 max-lg:hidden">
            <img src={girl_text_bg} className="w-[17%] h-auto" />
            <img
              src={girl_run}
              className=" absolute top-0 max-w-[35.2rem] h-auto right-0 z-[2]"
            />
            <img src={girl_bg_red} className=" absolute top-0 right-20" />
            <img
              src={wind_icon}
              className=" absolute top-[33%] w-20 right-[26%]"
            />
          </div>
        </div>
        <div className="w-[90%] bg-white mx-auto min-h-screen grid grid-cols-2 grid-rows-2 max-md:grid-cols-1">
          <div className="flex justify-center items-center flex-col h-full py-8">
            <img src={target_icon} className="w-24" />
            <h2 className="text-3xl my-4">Our History</h2>
            <p className="text-[#646464] font-medium w-[70%] text-center max-md:w-[95%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
          <div className="h-full">
            <img src={about_img_one} className="w-full h-full" />
          </div>
          <div>
            <img src={about_img_two} className="w-full" />
          </div>
          <div className="flex justify-center items-center flex-col h-full py-8">
            <img src={history_icon} className="w-24" />
            <h2 className="text-3xl my-4">Our History</h2>
            <p className="text-[#646464] font-medium w-[70%] text-center max-md:w-[95%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
