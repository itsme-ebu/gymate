import React from "react";
import { useSelector } from "react-redux";
function Friday() {
  const friday = useSelector((state) => state.schedule.schedule).find(
    (sch) => sch.day === "Friday"
  );

  return (
    <>
      {friday.classes.map((fri) => (
        <div className="flex justify-around bg-[#f2f2f2] py-8 w-[95%] max-md:flex-col items-center text-center max-md:gap-5">
          <div className="lg:w-[25%]">
            <p className="text-[#646464] text-sm my-2">Class Name</p>
            <h2 className="text-xl">{fri.class_name}</h2>
          </div>
          <div className="lg:w-[25%]">
            <p className="text-[#646464] text-sm my-2">Time</p>
            <h2 className="text-lg">{fri.class_time}</h2>
          </div>
          <div className="lg:w-[25%]">
            <p className="text-[#646464] text-sm my-2">Trainer</p>
            <h2 className="text-xl">{fri.class_trainer}</h2>
          </div>
          <button className="bg-[#555] text-white px-6 hover:bg-[#ff0336] rounded-full text-base py-3">
            Join Now
          </button>
        </div>
      ))}
    </>
  );
}

export default Friday;
