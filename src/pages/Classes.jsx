import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Class from "../components/Class";
import { useSelector } from "react-redux";
function Classes() {
  const classes = useSelector((state) => state.class.classes);
  return (
    <div>
      <HeaderBanner path="Classes" />
      <div className="classes p-10 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-4">
        {classes.map((clas) => (
          <Class clas={clas} key={clas.id} />
        ))}
      </div>
    </div>
  );
}

export default Classes;
