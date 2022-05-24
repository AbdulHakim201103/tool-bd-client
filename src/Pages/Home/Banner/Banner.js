import React from "react";
import banner1 from "../../../assets/banner/banner1.webp";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div
        class="hero min-h-screen "
        style={{
          background: `url(${banner1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div class="hero-content  text-center">
          <div class="max-w-md text-white">
            <h1 class="text-5xl font-bold mt-10">Hand Tools Power Saw Machine</h1>
            <button class="btn btn-primary mt-10">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
