import React, { useState } from "react";

function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const calaulateBMI = () => {
    if (height === 0 || weight === 0) {
      alert("Please enter a valid height and weight");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));
    }

    if (bmi < 20) {
      setMessage("Underweight");
    } else if (bmi >= 20 && bmi <= 27) {
      setMessage("Normal");
    } else {
      setMessage("Overweight");
    }
  };
  return (
    <>
      <section className=" min-h-[40vh] calculat px-8 text-white flex items-center max-md:bg-right max-md:px-3">
        <div className="py-10 w-full">
          <h2 className="text-[2.5rem]">
            Let's Calculate Your <span className="text-red-600">BMI</span>{" "}
          </h2>
          <p className="text-[#646464] w-[80%] my-4 max-md:w-full">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div className="flex gap-1 w-full">
            <div>
              <input
                type="number"
                placeholder="Weight/kg"
                className=" p-2 w-[80%] my-2 bg-transparent text-white outline-none border"
                onChange={(e) => setWeight(e.target.value)}
              />
              <p>
                Your BMI is:{" "}
                <span className="font-semibold text-red-600">{bmi}</span>
              </p>
            </div>
            <div>
              <input
                type="number"
                placeholder="Height/cm"
                className=" p-2 w-[80%] my-2 bg-transparent text-white outline-none border"
                onChange={(e) => setHeight(e.target.value)}
              />
              <p>
                Your weight is:{" "}
                <span className="font-semibold text-red-600">{message}</span>
              </p>
            </div>
          </div>

          <button
            className="px-10 py-4 bg-[#595959] hover:bg-[#ff0336] text-white my-4 font-semibold uppercase w-fit"
            onClick={calaulateBMI}
          >
            calculate
          </button>
        </div>
      </section>
    </>
  );
}

export default BMI;
