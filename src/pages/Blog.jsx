import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import { useSelector } from "react-redux";
import BlogBox from "../components/BlogBox";
import { gimate_girl_banner } from "../assets";

function Blog() {
  const blogs = useSelector((state) => state.blog.blog);

  return (
    <div className="min-h-screen">
      <HeaderBanner path="Blog" />
      <div className="my-10 min-h-screen w-full px-8 grid grid-cols-3 max-md:grid-cols-1 max-md:px-4">
        <div className="lg:w-[95%] min-h-screen lg:col-span-2">
          {blogs.map((blog) => (
            <BlogBox blog={blog} key={blog.id} />
          ))}
        </div>
        <div className="w-full min-h-screen">
          <div className="flex items-center border border-[#9c9c9ca8] rounded-lg overflow-hidden h-14">
            <input
              type="text"
              placeholder="Search"
              className=" px-4 flex-1 text-lg h-full outline-none"
            />
            <button className="h-full px-3 bg-[#ff0336] text-white ">
              {" "}
              <i className="ri-search-line text-3xl"></i>
            </button>
          </div>
          {/* Catagorys  */}
          <div className="bg-[#f8f8f8] px-6 py-12 my-10">
            <h2 className="text-xl mb-4 border-b-4 py-1 border-[#ff0336] w-fit">
              Categories
            </h2>

            <div
              className="text-[#646464] font-medium border-b border-[#aba9a986]
             py-4 flex justify-between hover:text-[#ff0336] cursor-pointer"
            >
              <p>
                <i className="ri-arrow-right-s-line text-xl mr-2"></i>
                Body Building
              </p>
              <p>(4)</p>
            </div>
            <div
              className="text-[#646464] font-medium border-b border-[#aba9a986]
             py-4 flex justify-between hover:text-[#ff0336] cursor-pointer"
            >
              <p>
                <i className="ri-arrow-right-s-line text-xl mr-2"></i>
                Boxing
              </p>
              <p>(4)</p>
            </div>
            <div
              className="text-[#646464] font-medium border-b border-[#aba9a986]
             py-4 flex justify-between hover:text-[#ff0336] cursor-pointer"
            >
              <p>
                <i className="ri-arrow-right-s-line text-xl mr-2"></i>
                Crossfit
              </p>
              <p>(4)</p>
            </div>
            <div
              className="text-[#646464] font-medium border-b border-[#aba9a986]
             py-4 flex justify-between hover:text-[#ff0336] cursor-pointer"
            >
              <p>
                <i className="ri-arrow-right-s-line text-xl mr-2"></i>
                Fitness
              </p>
              <p>(4)</p>
            </div>
            <div
              className="text-[#646464] font-medium border-b border-[#aba9a986]
             py-4 flex justify-between hover:text-[#ff0336] cursor-pointer"
            >
              <p>
                <i className="ri-arrow-right-s-line text-xl mr-2"></i>
                Meditation
              </p>
              <p>(4)</p>
            </div>
            <div
              className="text-[#646464] font-medium border-b border-[#aba9a986]
             py-4 flex justify-between hover:text-[#ff0336] cursor-pointer"
            >
              <p>
                <i className="ri-arrow-right-s-line text-xl mr-2"></i>
                Yoga
              </p>
              <p>(4)</p>
            </div>
          </div>
          {/* recent posts */}
          <div className="bg-[#f8f8f8] px-6 py-12 my-10">
            <h2 className="text-xl mb-6 border-b-4 py-1 border-[#ff0336] w-fit">
              Recent Posts
            </h2>

            {blogs.map((blog) => (
              <div className="flex gap-4 items-center my-4">
                <img src={blog.banner} className=" w-28 h-28 object-cover" />
                <div>
                  <p className="text-[#646464] font-medium my-1 max-sm:text-xs">
                    {blog.time}
                  </p>
                  <h2 className="hover:text-[#ff0336] cursor-pointer max-sm:text-sm">
                    {blog.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* Tages */}
          <div className="bg-[#f8f8f8] px-6 py-12 my-10">
            <h2 className="text-xl mb-6 border-b-4 py-1 border-[#ff0336] w-fit">
              Popular Tags
            </h2>
            <div className="flex gap-2 flex-wrap">
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Crossfit
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Fitness
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Gym
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Meditation
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Running
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Yoga
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Workout
              </p>
              <p className="w-fit px-4 py-2 bg-white font-medium hover:text-[#ff0336] cursor-pointer">
                #Boxing
              </p>
            </div>
          </div>
          <div className=" relative">
            <img
              src="https://images.pexels.com/photos/16358993/pexels-photo-16358993/free-photo-of-photo-of-a-young-woman-in-a-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover"
            />
            <h2 className="cut_shape text-4xl bg-white px-8 py-2 absolute top-16 -left-2">
              GYMAT
            </h2>
            <div className=" absolute top-36 text-white left-6">
              <h2 className="text-6xl">46%</h2>
              <h2 className="text-center text-lg">Flat Discount</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
