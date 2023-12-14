import React from "react";

function BlogBox({ blog }) {
  console.log(blog);
  return (
    <div>
      <img src={blog.banner} className="w-full h-full object-cover" />
      <p className="my-3 text-sm font-medium">
        <i className="ri-stack-fill text-red-600 text-xl mr-3"></i>
        By <span className="font-bold">{blog.author}</span> | {blog.time} |{" "}
        {blog.catagory}
      </p>

      <h2 className="text-3xl leading-relaxed">{blog.title}</h2>
      <p className="my-3 text-[#646464] font-medium">{blog.des}</p>
      <button className="px-6 py-3 bg-[#FF0336] text-white my-8 font-bold uppercase">
        Read more <i className="ri-arrow-right-line text-xl"></i>
      </button>
    </div>
  );
}

export default BlogBox;
