import React from "react";
const Hero = () => {
  return (
    <>
      <section className=" h-screen flex  justify-center">
        <img
          src="/hero-background.png"
          alt="Background hero image"
          className="relative object-full w-full "
        />

        <div className="absolute text-center max-w-5xl mx-auto mt-2 ">
          <h1 className="font-poppins font-bold text-[38px] mt-[50px] md:text-[48px]">
            Maximize Your Video Ads ROI with <br />
            SceneSwitcher.io
          </h1>
          <p className="text-text text-[20px] mt-4">
            Our revolutionary software allows you to effortlessly change scenes
            on your performing VSLs, which helps you create fresh variations
            that reduce ad fatigue and resonate with a wider audience. Easily
            test different scenes to find the perfect combination that
            skyrockets your conversions and profits, without the need for
            expensive video editors.
          </p>

          <button className="bg-primary text-white px-6 py-4 rounded-full mt-[48px]">
            Get Stated
          </button>

          <div className="relative  bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center mt-9">
            <button className="bg-white border-2 border-gray-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-3.057A1 1 0 008 9.057v6.885a1 1 0 001.555.832l5.197-3.056a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
