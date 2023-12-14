import React, { useEffect, useState } from "react";
import { trainer_1, trainer_2, trainer_3 } from "../assets";
function Trainers({ trainer }) {
  const [trainer_img, setTrainer_img] = useState(trainer_1);
  useEffect(() => {
    if (trainer.id === "ana") {
      setTrainer_img(trainer_3);
    }
    if (trainer.id === "jonathan") setTrainer_img(trainer_2);
  }, [trainer]);
  return (
    <div className="w-full max-h-[28rem] trainer_img relative">
      <div className="">
        <img src={trainer_img} className="mx-auto" />
      </div>
      <div className="trainer_line w-full bg-white h-[30%] absolute bottom-0 left-0 flex flex-col justify-center items-center gap-2 cursor-pointer">
        <h2 className="text-2xl">{trainer.name}</h2>
        <p>{trainer.role}</p>
        <div className="flex justify-center gap-4 items-center">
          <i className="ri-facebook-fill text-xl text-[#646464]"></i>
          <i className="ri-twitter-fill text-xl text-[#646464]"></i>
          <i className="ri-instagram-line text-xl text-[#646464]"></i>
          <i className="ri-mail-line text-xl text-[#646464]"></i>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
