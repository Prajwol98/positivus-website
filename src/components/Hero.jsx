import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src="/hero-background.png"
        alt="Background hero image"
        className="absolute inset-0 object-cover w-full "
      />

      <div className="relative text-center max-w-2xl mx-auto mt-2 ">
        <h1 className="font-poppins font-bold text-[48px] ">
          Maximize Your Video Ads ROI with SceneSwitcher.io
        </h1>
      </div>
    </section>
  );
};

export default Hero;
