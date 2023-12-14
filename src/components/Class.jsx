import React from "react";

function Class({ clas }) {
  return (
    <div className=" w-full h-[28rem] rounded-xl overflow-hidden relative ">
      <div className="black_effect">
        <img src={clas.img} className="w-full h-full object-cover" />

        <div className="absolute text-white bottom-12 left-8">
          <h2 className="text-3xl red_line">{clas.name}</h2>
          <p className="my-4 font-medium">
            <i className="ri-user-line"></i> {clas.trainer}
            <i className="ri-time-line mx-2"></i>
            {clas.time}
          </p>

          <button className="bg-white px-6 py-3 text-l font-semibold uppercase text-black">
            Join Now
            <i className="ri-arrow-right-line mx-1 text-[#ff0336]"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Class;
