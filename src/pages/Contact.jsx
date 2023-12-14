import React from "react";
import HeaderBanner from "../components/HeaderBanner";

function Contact() {
  return (
    <div>
      <HeaderBanner path="Contact Us" />
      <div className="min-h-screen grid grid-cols-2 gap-10 px-10 my-10 max-md:grid-cols-1 max-md:px-4">
        <div>
          <h2 className="text-4xl my-5">
            We are here for help you! To Shape Your Body.
          </h2>
          <p className=" font-medium text-[#646464] my-10">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="flex justify-between flex-wrap gap-8">
            <div>
              <h2 className="text-xl mb-2 red_line">New York City, USA</h2>
              <p className="font-medium text-[#646464]">
                85 Briston Mint Street, <br /> London, E1 8LG, USA
              </p>
            </div>
            <div className="">
              <h2 className="text-xl mb-2 red_line">Opening Hours</h2>
              <p className="font-medium text-[#646464]">
                Mon to Fri: 7:30 am — 1:00 am
              </p>
              <p className="font-medium text-[#646464]">
                Mon to Fri: 7:30 am — 1:00 am
              </p>
            </div>
            <div>
              <h2 className="text-xl mb-2 red_line">Information</h2>
              <p className="font-medium text-[#646464]">+800-123-4567</p>
              <p className="font-medium text-[#646464]"> gymat@gymail.com</p>
            </div>
            <div className="">
              <h2 className="text-xl mb-2 red_line">Follow Us On</h2>
              <div className="my-5 flex items-center gap-5">
                <i className=" ri-facebook-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white cursor-pointer"></i>
                <i className="ri-twitter-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white cursor-pointer"></i>
                <i className="ri-instagram-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white cursor-pointer"></i>
                <i className="ri-youtube-fill text-2xl p-2 px-3 rounded-full bg-[#efefef] hover:bg-[#ff0366] hover:text-white cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-[#f8f8f8] p-10 max-md:p-3">
          <h2 className="text-3xl red_line">Leave Us Your Info</h2>
          <form className="my-8">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full py-4 text-l outline-none border border-[#cbcbcb94] px-5 mb-5"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full py-4 text-l outline-none border border-[#cbcbcb94] px-5 mb-5"
            />
            <select
              name="class"
              id="class"
              className="w-full py-4 text-l outline-none border border-[#cbcbcb94] px-5 mb-5"
            >
              <option value="#">Select Class</option>
              <option value="Body Building">Body Building</option>
              <option value="Boxing">Boxing</option>
              <option value="Running">Running</option>
              <option value="Fitness">Fitness</option>
              <option value="Yoga">Yoga</option>
              <option value="Workout">Workout</option>
              <option value="Karate">Karate</option>
              <option value="Meditation">Meditation</option>
              <option value="Cycling">Cycling</option>
            </select>

            <textarea
              name="something"
              cols="30"
              rows="5"
              className="w-full py-4 text-l outline-none border border-[#cbcbcb94] px-5 mb-5"
            ></textarea>

            <button className="bg-[#ff0336] text-white px-6 py-3 text-lg font-bold block mx-auto">
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
