import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="relative ">
      <img
        src="../public/hero-background.png"
        alt="img"
        className="w-[100%] block "
      />
      <div className=" absolute top-[100px] left-[10%] right-[10%] md:left-[20%] md:right-[20%] flex flex-col items-center text-center">
        <h1 className="text-black font-poppins font-bold text-2xl md:text-5xl">
          maximize your video ads ROI with sceneswitcher.io
        </h1>
        <p className="text-text mt-[20px] font-poppins text-[14px] md:text-[20px]">
          our revolutionary software allows tou to effortlessly chanfe scenes on
          your performing VSLs, Which helps you create fresh variations that
          reduce ad fatigue and resonate with a wider audience . Easily test
          different scenes to find the perfect combination that skyrockets your
          conversions and profots, without the need for expensive video editors
        </p>
        <Button text={"Get Started"} className="mt-5" />
      </div>
    </div>
  );
};

export default Hero;
