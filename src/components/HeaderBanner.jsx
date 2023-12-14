import React from "react";

function HeaderBanner({ path }) {
  return (
    <div className="page_banner w-full h-72 relative">
      <h2 className="text-4xl absolute bottom-10 text-white w-full text-center">
        {path}
      </h2>
    </div>
  );
}

export default HeaderBanner;
