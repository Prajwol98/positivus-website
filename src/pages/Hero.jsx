import React from "react";
import Illustration from "../assets/Illustration.png";
import { Link } from "react-router-dom";
import Companylogo1 from "../assets/Company logo (1).png";
import Companylogo2 from "../assets/Company logo (2).png";
import Companylogo3 from "../assets/Company logo (3).png";
import Companylogo4 from "../assets/Company logo (4).png";
import Companylogo5 from "../assets/Company logo (5).png";
import Companylogo6 from "../assets/Company logo (6).png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="container mx-auto md:px-20">
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
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={false}
          >
            <div>
              <img src={Companylogo1} alt="logo" />
            </div>
            <div>
              <img src={Companylogo2} alt="logo" />
            </div>
            <div>
              <img src={Companylogo3} alt="logo" />
            </div>
            <div>
              <img src={Companylogo4} alt="logo" />
            </div>
            <div>
              <img src={Companylogo5} alt="logo" />
            </div>
            <div>
              <img src={Companylogo6} alt="logo" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
