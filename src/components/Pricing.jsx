import React from "react";

function Pricing() {
  return (
    <>
      <section className="pricing py-10 min-h-screen">
        <div className="my-10 px-3">
          <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white mx-auto">
            PRICING CHART
          </p>
          <h2 className="text-4xl text-center my-4">Exclusive Pricing Plan</h2>
          <p className="text-center">
            Gymat an unknown printer took a galley of type and scrambled <br />{" "}
            make a type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-3 px-10 gap-6 max-md:grid-cols-1 max-md:px-4">
          <div className="w-full bg-white">
            <div className="w-full min-h-[17rem] pricing1 relative hover:grayscale-0">
              <h2 className="bg-white w-[70%] text-center px-6 py-2 pt-4 text-xl absolute bottom-0 left-0 right-0 mx-auto">
                Beginners
              </h2>
            </div>
            <div className="flex flex-col gap-5 items-center py-8">
              <h2 className="text-6xl relative w-fit mx-auto px-6">
                <span className="text-3xl font-light absolute top-0 -left-2 text-[#646464]">
                  $
                </span>{" "}
                39{" "}
                <span className="text-xl font-light text-[#646464]">p/m</span>
              </h2>
              <p className="text-lg text-[#646464]">Free Hand</p>
              <p className="text-lg text-[#646464]">Gym Fitness</p>
              <p className="text-lg text-[#646464]">Weight Loss</p>
              <p className="text-lg text-[#646464]">Personal Trainer</p>
              <p className="text-lg text-[#646464]">Cycling</p>
              <button className="px-10 py-4 bg-[#ff0336] text-white my-4 font-bold uppercase w-fit">
                PURCHASE NOW
              </button>
            </div>
          </div>

          <div className="w-full bg-white">
            <div className="w-full min-h-[17rem] pricing2 relative hover:grayscale-0">
              <h2 className="bg-white w-[70%] text-center px-6 py-2 pt-4 text-xl absolute bottom-0 left-0 right-0 mx-auto">
                Beginners
              </h2>
            </div>
            <div className="flex flex-col gap-5 items-center py-8">
              <h2 className="text-6xl relative w-fit mx-auto px-6">
                <span className="text-3xl font-light absolute top-0 -left-2 text-[#646464]">
                  $
                </span>{" "}
                65{" "}
                <span className="text-xl font-light text-[#646464]">p/m</span>
              </h2>
              <p className="text-lg text-[#646464]">Free Hand</p>
              <p className="text-lg text-[#646464]">Gym Fitness</p>
              <p className="text-lg text-[#646464]">Weight Loss</p>
              <p className="text-lg text-[#646464]">Personal Trainer</p>
              <p className="text-lg text-[#646464]">Cycling</p>
              <button className="px-10 py-4 bg-[#ff0336] text-white my-4 font-bold uppercase w-fit">
                PURCHASE NOW
              </button>
            </div>
          </div>

          <div className="w-full bg-white">
            <div className="w-full min-h-[17rem] pricing3 relative hover:grayscale-0">
              <h2 className="bg-white w-[70%] text-center px-6 py-2 pt-4 text-xl absolute bottom-0 left-0 right-0 mx-auto">
                Beginners
              </h2>
            </div>
            <div className="flex flex-col gap-5 items-center py-8">
              <h2 className="text-6xl relative w-fit mx-auto px-4">
                <span className="text-3xl font-light absolute top-0 -left-2 text-[#646464]">
                  $
                </span>
                100
                <span className="text-xl font-light text-[#646464]">p/m</span>
              </h2>
              <p className="text-lg text-[#646464]">Free Hand</p>
              <p className="text-lg text-[#646464]">Gym Fitness</p>
              <p className="text-lg text-[#646464]">Weight Loss</p>
              <p className="text-lg text-[#646464]">Personal Trainer</p>
              <p className="text-lg text-[#646464]">Cycling</p>
              <button className="px-10 py-4 bg-[#ff0336] text-white my-4 font-bold uppercase w-fit">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
