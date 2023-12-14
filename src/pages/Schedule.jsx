import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function Schedule() {
  const schedules = useSelector((state) => state.schedule.schedule);
  return (
    <div>
      <HeaderBanner path="Schedule by Day" />
      <div className="w-full min-h-[50vh]">
        <div className="my-10 flex gap-5 justify-center flex-wrap">
          {schedules.map((schdule) => (
            <h2
              className="p-2 px-6 rounded-3xl border border-[#6464649b] w-fit hover:bg-[#ff0336] hover:text-white cursor-pointer"
              key={schdule.link}
            >
              <Link to={schdule.link}> {schdule.day} </Link>
            </h2>
          ))}
        </div>

        <div className=" flex flex-col justify-center items-center gap-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
