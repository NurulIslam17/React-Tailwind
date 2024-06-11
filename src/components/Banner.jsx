import React from "react";
import Typed from "react-typed";

function Banner() {
  return (
    <div className="bg-[#dfe4ea] w-full py-[100px] mx-auto">
      <div className="max-w-[1240px] mx-auto text-center">
        <div className="font-bold text-black text-2xl md:text-5xl">
          Grow your Bussines with me.
        </div>
        <div className="text- font-bold text-3xl">
          <Typed className="pl-2" strings={[' Software Design',' Software Development',' Web Design',' Web Development','SEO']} typeSpeed={100} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
