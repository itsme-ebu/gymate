import React from "react";
import { fitness_men } from "../assets";

function PageOne() {
  return (
    <div className="w-full min-h-screen grid grid-cols-3 px-10 gap-5 my-10 max-md:grid-cols-1 max-md:px-4">
      <img src={fitness_men} className="w-full h-96 object-cover" />
      <img
        src="https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className=" w-full h-96 object-cover"
      />
      <img
        src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className=" w-full h-96 object-cover"
      />
      <img
        src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-96 object-cover"
      />
      <img
        src="https://images.pexels.com/photos/700446/pexels-photo-700446.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-96 object-cover"
      />
      <img
        src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="w-full h-96 object-cover"
      />
      <img
        src="https://images.pexels.com/photos/1717097/pexels-photo-1717097.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-96 object-cover"
      />
      <img
        src="https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-96 object-cover"
      />

      <img
        src="https://images.pexels.com/photos/3076511/pexels-photo-3076511.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="w-full h-96 object-cover"
      />
    </div>
  );
}

export default PageOne;
