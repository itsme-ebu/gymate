import React from "react";
import { Link } from "react-router-dom";
function SignBox({ info }) {
  return (
    <div className="signup flex items-center justify-center">
      <div className="bg-black py-16 px-10 w-[40%] text-white max-lg:w-[60%] max-md:w-[90%]">
        <form>
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full py-3 px-4 text-l outline-none my-3 text-black"
            placeholder="gymate@gmail.com"
          />
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full py-3 px-4 text-l outline-none my-3 text-black"
            placeholder="password"
          />
          <button className="w-full bg-[#ff0336] text-white font-medium py-4 text-xl my-5">
            {info.button}
          </button>
        </form>
        <p className="my-2">
          {info.account}
          <Link to={info.link} className="font-bold mx-2 text-[#ff0336]">
            {info.link_text}
          </Link>
        </p>
        <p className=" text-xs">{info.message}</p>
      </div>
    </div>
  );
}

export default SignBox;
