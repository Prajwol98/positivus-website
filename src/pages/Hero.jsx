import React from "react";
import Illustration from "../assets/Illustration.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          <div>
            <h1 className="font-space-grotesk text-black font-bold text-6xl mb-4">
              Navigating the <br></br>digital landscape <br></br> for success
            </h1>
            <p className="text-black font-space-grotesk text-lg">
              Our digital marketing agency helps business <br /> grow and
              success online through a range of <br />
              service including SEO,PPC,social media marketing, <br /> and
              content creation
            </p>
            <Link to="/contact us">
              <button className="text-white font-space-grotesk w-full md:w-[30%] bg-black py-4 px-6 rounded-lg mt-5">
                Book a Consultant
              </button>
            </Link>
          </div>
          <div>
            <img src={Illustration} alt="pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
