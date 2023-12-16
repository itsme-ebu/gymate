import React from "react";
import Nav from "../components/Nav";
import "./home.css";
import { useSelector } from "react-redux";
import {
  athletic_club,
  body_flex,
  bottle_icon,
  cycling_girl,
  details_icon,
  equpments_icon,
  fitness_club,
  girl_bg_red,
  girl_run,
  girl_text_bg,
  gym_bag,
  gym_club,
  gym_equp1,
  gym_icon,
  karate_img,
  meditation_img,
  men_rope,
  mma_img,
  muscle_club,
  power_img,
  power_lift_club,
  quote_icon,
  recent_icon,
  testimonial_girl,
  weightlifter_icon,
  wind_icon,
  workout_icon,
  workout_img,
} from "../assets";
import Trainers from "../components/Trainers";
import Pricing from "../components/Pricing";
import BMI from "../components/BMI";

function Home() {
  const trainers = useSelector((state) => state.trainers.trainers);
  return (
    <div>
      <div className="hero_section ">
        <div className=" flex items-center lg:gap-[3rem] lg:w-[55%] lg:float-right h-full text-white ">
          <div className="w-[70%] max-sm:w-full max-md:text-center ">
            <p className="bg-white w-max px-4 py-2 text-black my-5 max-md:mx-auto">
              FIND YOUR ENERGY
            </p>
            <h2 className="text-5xl ">
              MAKE YOUR BODY <span className=" font-normal">FIT & PERFECT</span>
            </h2>
            <button className="px-6 py-3 button_shadow bg-white text-black my-8 font-semibold uppercase">
              Our classes{" "}
              <i className="ri-arrow-right-line text-xl text-[#FF0336]"></i>
            </button>
          </div>
          <div className=" rotate-180 flex flex-col-reverse gap-10 items-center max-md:hidden">
            <h2 className=" uppercase rotate-90 mt-5 text-xl">share</h2>
            <div className=" w-14 min-h-[2px] bg-[#FF0336] rotate-90"></div>
            <div className=" rotate-180  flex flex-col">
              <i className="ri-linkedin-fill text-xl hover:text-[#FF0336]"></i>
              <i className="ri-facebook-circle-fill text-xl my-1 hover:text-[#FF0336]"></i>
              <i className="ri-twitter-fill text-xl hover:text-[#FF0336] cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <section className="section2">
        <div className=" grid grid-cols-3 px-8 gap-8 w-full  max-md:grid-cols-1">
          <div className="speciality -mt-14">
            <div className="bg-white flex flex-col justify-center items-center p-4 h-full hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer">
              <img src={recent_icon} />
              <h2 className="text-2xl my-3">PROGRESSION</h2>
              <p className=" text-center font-medium">
                Our team of experts will work with you to create a customized
                plan that helps you achieve success one step at a time.
              </p>
            </div>
          </div>

          <div className="speciality -mt-14 max-md:m-0">
            <div className="bg-white flex flex-col justify-center items-center p-5 h-full hover:bg-transparent transition-all duration-500 hover:text-white cursor-pointer">
              <img src={workout_icon} />
              <h2 className="text-2xl my-3">WORKOUT</h2>
              <p className=" text-center font-medium">
                With a variety of workouts to choose from, you'll have
                everything you need to get into the best shape of your life.
              </p>
            </div>
          </div>

          <div className="speciality -mt-14 max-md:m-0">
            <div className="bg-white flex flex-col justify-center items-center p-4 h-full transition-all duration-500 hover:bg-transparent hover:text-white cursor-pointer">
              <img src={details_icon} />
              <h2 className="text-2xl my-3">NUTRITIONS</h2>
              <p className=" text-center font-medium">
                Our team will work with you to create a personalized meal plan
                that helps you reach your specific health goals.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-20 px-8 max-lg:grid-cols-1 max-sm:px-4">
          <div className=" max-md:text-center">
            <p className="my-5 red_bg relative z-[1] w-48 text-center font-bold text-white max-md:mx-auto">
              WHO WE ARE
            </p>
            <h2 className="text-4xl my-4">
              Take Your Health And Body To Next Level
            </h2>
            <p className=" font-medium ">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="grid grid-cols-3 my-8 text-center max-md:grid-cols-1 max-md:px-14">
              <div className=" lg:border-r py-5 max-md:border-none">
                <img src={weightlifter_icon} className="w-16 mx-auto mb-5" />
                <h2 className="text-xl">PROFESSIONAL TRAINERS</h2>
              </div>
              <div className="lg:border-r py-5 ">
                <img src={equpments_icon} className="w-16 mx-auto mb-5" />
                <h2 className="text-xl">MODERN EQUIPMENTS</h2>
              </div>
              <div className="py-5">
                <img src={gym_icon} className="w-16 mx-auto mb-5" />
                <h2 className="text-xl">FANCY GYM MACHINES</h2>
              </div>
            </div>
            <button className="button_shadow px-6 py-3 bg-red-600 hover:bg-[#FF0336] text-white font-bold uppercase block max-sm:mx-auto">
              Take a tour
              <i className="ri-arrow-right-line text-xl font-thin text-white ml-3"></i>
            </button>
          </div>
          <div className=" relative px-4 max-lg:hidden">
            <img src={girl_text_bg} className="w-[17%] h-auto" />
            <img
              src={girl_run}
              className=" absolute top-0 max-w-[35.2rem] h-auto right-0 z-[2]"
            />
            <img src={girl_bg_red} className=" absolute top-0 right-20" />
            <img
              src={wind_icon}
              className=" absolute top-[33%] w-20 right-[26%]"
            />
          </div>
        </div>
      </section>
      {/* OUR FEATURED CLASS */}
      <section className="w-full min-h-screen">
        <div className="my-20 text-center">
          <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white mx-auto">
            WHY CHOOSE US
          </p>
          <h2 className="my-5 text-4xl">
            We Are Offering Best Flexible Classes
          </h2>
        </div>

        <div className="grid grid-cols-4 px-6 gap-4 my-10 max-lg:grid-cols-1">
          <div className=" col-span-2 h-[18rem] overflow-hidden relative max-lg:col-span-1">
            <img src={cycling_girl} className="gym_imgs" />
            <div className=" absolute bottom-5 left-6">
              <h2 className="text-3xl text-white">Cycling</h2>
              <p className="bg-[#FF0336] p-1 px-3 mt-3 text-white">
                Wednesday: 9:00am-10:00am
              </p>
            </div>
          </div>
          <div className="w-full h-[18rem] relative overflow-hidden">
            <img src={karate_img} className="gym_imgs" />
            <div className=" absolute bottom-5 left-6">
              <h2 className="text-3xl text-white">Karate</h2>
              <p className="bg-[#FF0336] p-1 px-3 mt-3 text-white">
                Friday: 10:00am-11:00am
              </p>
            </div>
          </div>
          <div className="w-full h-[18rem] relative overflow-hidden">
            <img src={power_img} className="gym_imgs" />
            <div className=" absolute bottom-5 left-6">
              <h2 className="text-3xl text-white">Power</h2>
              <p className="bg-[#FF0336] p-1 px-3 mt-3 text-white">
                Saturday: 9:00am-10:00am
              </p>
            </div>
          </div>
          <div className="w-full h-[18rem] relative overflow-hidden">
            <img src={meditation_img} className="gym_imgs" />
            <div className=" absolute bottom-5 left-6">
              <h2 className="text-3xl text-white">Meditation</h2>
              <p className="bg-[#FF0336] p-1 px-3 mt-3 text-white">
                Friday: 1:00pm-2:00pm
              </p>
            </div>
          </div>
          <div className="w-full h-[18rem] relative overflow-hidden">
            <img src={mma_img} className="gym_imgs" />
            <div className=" absolute bottom-5 left-6">
              <h2 className="text-3xl text-white">Martial Arts</h2>
              <p className="bg-[#FF0336] p-1 px-3 mt-3 text-white">
                Sunday: 6:00pm-7:00pm
              </p>
            </div>
          </div>
          <div className=" col-span-2 h-[18rem] overflow-hidden relative max-lg:col-span-1">
            <img src={workout_img} className="gym_imgs" />
            <div className=" absolute bottom-5 left-8">
              <h2 className="text-3xl text-white">Workout</h2>
              <p className="bg-[#FF0336] p-1 px-3 mt-3 text-white">
                Monday: 4:00pm-5:00pm
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="w-full min-h-screen mt-20 text-white black_bg">
        <div className="chose_section flex items-center py-10 px-4 gap-10 max-lg:flex-col max-lg:gap-5">
          <h2 className="text-3xl lg:text-4xl lg:px-6 w-1/2 max-lg:w-full max-lg:text-center max-lg:pt-8">
            We Are Always Providing Best Fitness Service For You
          </h2>
          <button className="px-6 py-3 bg-white text-black my-8 font-semibold uppercase w-fit">
            Join with us
            <i className="ri-arrow-right-line text-xl text-[#FF0336]"></i>
          </button>
        </div>

        <div className="py-20 grid grid-cols-2 px-10 gap-8 max-lg:grid-cols-1 max-md:px-3">
          <div className="men_rope relative px-5 max-lg:mx-auto">
            <img src={men_rope} />
            <div className="bg-white py-[0.8rem] px-[0.9rem] cursor-pointer rounded-full w-fit absolute top-[40%] left-[35%]">
              <i className="ri-play-fill text-[#FF0336] text-5xl max-md:text-4xl"></i>
            </div>
          </div>
          <div className="px-4">
            <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white max-md:mx-auto">
              WHY CHOOSE US
            </p>
            <h2 className="my-5 text-4xl">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="text-[#b4b4b4]">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="my-8 grid grid-cols-2 gap-8 max-md:grid-cols-1">
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-full bg-[#2b2b2b] hover:bg-[#ff0336] w-fit">
                  <img src={body_flex} className="w-14" />
                </div>
                <h2 className="text-xl">Free Fitness Training</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-full bg-[#2b2b2b] hover:bg-[#ff0336] w-fit">
                  <img src={gym_equp1} className="w-14" />
                </div>
                <h2 className="text-xl">Modern Gym Equipments</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-full bg-[#2b2b2b] hover:bg-[#ff0336] w-fit">
                  <img src={gym_bag} className="w-14" />
                </div>
                <h2 className="text-xl">Gym Bag Equipments</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 rounded-full bg-[#2b2b2b] hover:bg-[#ff0336] w-fit">
                  <img src={bottle_icon} className="w-14" />
                </div>
                <h2 className="text-xl">Fresh Bottle Watter</h2>
              </div>
            </div>

            <button className="px-6 py-4 bg-[#595959] hover:bg-[#ff0336] text-white my-8 font-semibold uppercase w-fit">
              our classes
              <i className="ri-arrow-right-line text-xl text-white ml-3"></i>
            </button>
          </div>
        </div>
      </section>
      {/* GYM TRAINERS */}
      <section className="gym_trainer">
        <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white mx-auto">
          GYM TRAINERS
        </p>
        <h2 className="text-4xl my-5 text-center">Team Of Expert Coaches</h2>
        <p className="text-center w-1/2 mx-auto px-3 max-md:w-full text-[#646464]">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>

        <div className="grid grid-cols-3 gap-16 px-8 my-10 max-md:grid-cols-1">
          {trainers.map((trainer) => (
            <Trainers trainer={trainer} key={trainer.id} />
          ))}
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="w-full min-h-screen py-10 my-10 border-b-[1px]">
        <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white mx-auto">
          TESTIMONIALS
        </p>

        <div className=" border-[7px] h-full border-slate-100 w-[90%] mx-auto py-5 my-[5rem]">
          <div className="w-[95%] min-h-[20rem] bg-black mx-auto flex justify-between items-center relative">
            <div></div>
            <div className="w-[60%] text-white px-10 max-md:w-full py-5">
              <img src={quote_icon} className="w-14" />
              <p className="text-[#dedede] my-4">
                “I've been a member of Gymate for the past 6 months and it has
                been an amazing experience. The trainers are knowledgeable and
                supportive, the equipment is top-notch, and the community of
                members is friendly and encouraging.”
              </p>
              <h2 className=" text-2xl">Harry Potter</h2>
              <p>CEO of Hogwarts</p>
            </div>
            <img
              src={testimonial_girl}
              className="testimonial_girl absolute bottom-0 left-0 max-md:hidden"
            />
          </div>
        </div>

        <div className=" flex justify-center gap-14 items-center flex-wrap my-5">
          <img src={athletic_club} className="w-[10rem] hover:invert" />
          <img src={fitness_club} className="w-[10rem] hover:invert" />
          <img src={gym_club} className="w-[10rem] hover:invert" />
          <img src={muscle_club} className="w-[10rem] hover:invert" />
          <img src={power_lift_club} className="w-[10rem] hover:invert" />
        </div>
      </section>
      {/* GYMAT GALLERY */}
      <section className="py-10 w-full min-h-screen max-md:hidden">
        <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white mx-auto">
          GYMAT GALLERY
        </p>
        <h2 className="text-4xl my-5 text-center">Our Workplace Gallery</h2>
        <p className="text-center text-[#646464]">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. <br /> Attracts talents and showcases company's work
          atmosphere.{" "}
        </p>
        <div className="px-10 grid grid-cols-2 grid-rows-3 gap-2 my-10">
          <div className="box-1 w-full max-h-[25rem] row-span-2  object-cover overflow-hidden"></div>
          <div className="box-2 w-full h-[12rem] object-cover overflow-hidden"></div>
          <div className="box-3 w-full max-h-[25rem] row-span-2"></div>
          <div className=" w-full h-[12rem] grid grid-cols-2 gap-2">
            <div className="w-full h-full box-4"></div>
            <div className="w-full h-full box-5"></div>
          </div>
        </div>
      </section>
      {/* Calculate BMI */}
      <BMI />
      {/* PRICING CHART */}
      <Pricing />
      {/* Our Recent News */}
      <section className="w-full min-h-screen py-[5rem]">
        <p className="my-5 red_bg relative z-[1] w-52 text-center font-bold text-white mx-auto">
          LATEST BLOG
        </p>
        <h2 className="text-4xl my-3 text-center">Our Recent News</h2>
        <p className="text-center w-1/2 mx-auto max-md:w-full px-4">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>

        <div className="grid grid-cols-3 px-8 gap-5 my-20 max-md:grid-cols-1 max-sm:px-4">
          <div className="w-full max-h-[25rem] py-8 px-6 shadow_active">
            <h4 className="px-3 py-1 font-medium w-fit border border-black rounded-full">
              11.12.2023
            </h4>
            <h2 className="text-2xl my-5">Yoga For Everyone in 2023</h2>
            <p>
              This is program designed to make the practice of yoga beneficial
              for people of all ages, abilities, and backgrounds.
            </p>
            <button className="px-6 py-3 bg-[#FF0336] text-white my-8 font-bold uppercase">
              Read more <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
          <div className="w-full max-h-[25rem] py-8 px-6 shadow_active">
            <h4 className="px-3 py-1 font-medium w-fit border border-black rounded-full">
              03.01.2024
            </h4>
            <h2 className="text-2xl my-5">
              Getting Back Into CrossFit After Vacation
            </h2>
            <p>
              Learn how to ease back into your CrossFit routine after a vacation
              with tips and strategies for success.
            </p>
            <button className="px-6 py-3 bg-[#FF0336] text-white my-8 font-bold uppercase">
              Read more <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
          <div className="w-full max-h-[25rem] py-8 px-6 shadow_active">
            <h4 className="px-3 py-1 font-medium w-fit border border-black rounded-full">
              05.01.2024
            </h4>
            <h2 className="text-2xl my-5">Meet Fitness Ambassador Grace</h2>
            <p>
              Get to know Grace, a fitness enthusiast and dedicated ambassador
              who is passionate about helping others reach their fitness goals.
            </p>
            <button className="px-6 py-3 bg-[#FF0336] text-white my-8 font-bold uppercase">
              Read more <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </section>
      {/* Banner  */}
      <section className="banner py-10 text-white px-8 my-10">
        <h2 className="text-[2.7rem] my-3 max-sm:text-4xl">
          Need a Fitness Trainer?
        </h2>
        <h2 className="text-3xl mb-5 max-sm:text-2xl">
          <span className="text-red-600">Call:</span> +123-456789
        </h2>
        <button className="px-6 py-4 bg-[#FF0336] text-white my-5 font-bold uppercase">
          PURCHASE NOW
        </button>
      </section>

      {/* Footer */}
    </div>
  );
}

export default Home;
