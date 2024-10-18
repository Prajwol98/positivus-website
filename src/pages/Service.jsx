import React from "react";
import illustrate from "../assets/Illustration (1).png";
import illustrate2 from "../assets/Illustration (2).png";
import illustrate3 from "../assets/Illustration (3).png";
import illustrate4 from "../assets/Illustration (4).png";
import illustrate5 from "../assets/tokyo-sending-messages-from-one-place-to-another 1.png";
import illustrate6 from "../assets/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import illustrate7 from "../assets/Illustration (5).png";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <div className="container mx-auto px-20 ">
        <div className="flex flex-col items-center gap-8 md:flex md:flex-row mb-10">
          <h1 className="bg-green text-black font-space-grotesk text-xl p-2 rounded">
            Services
          </h1>
          <p className="text-black font-space-grotesk text-lg max-w-[750px]">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link to={"/"}>
            <div className="grid grid-cols-2 bg-grey border border-black border-b-4 rounded-[35px] p-10 hover:translate-x-1 hover:-translate-y-3 hover:ease-in-out hover:duration-100 ">
              <div>
                <h2 className="bg-green text-black font-space-grotesk text-xl p-2 rounded w-[70%] md:w-[60%] mb-[60px]">
                  Search engine <br /> optimization
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                    <path
                      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                      fill="#B9FF66"
                    />
                  </svg>
                  <span>Learn More</span>
                </div>
              </div>
              <div>
                <img src={illustrate} alt="logo" />
              </div>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="grid grid-cols-2 bg-green border border-black border-b-4 rounded-[35px] p-10  hover:translate-x-1 hover:-translate-y-3 hover:ease-in-out hover:duration-100">
              <div>
                <h2 className="bg-white text-black font-space-grotesk text-xl p-2 rounded w-[70%] md:w-[60%] mb-[60px]">
                  Pay-per-click <br />
                  advertising
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                    <path
                      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                      fill="#B9FF66"
                    />
                  </svg>
                  <span>Learn More</span>
                </div>
              </div>
              <div>
                <img src={illustrate2} alt="logo" />
              </div>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="grid grid-cols-2 bg-black border border-black border-b-4 rounded-[35px] p-10  hover:translate-x-1 hover:-translate-y-3 hover:ease-in-out hover:duration-100">
              <div>
                <h2 className="bg-white text-black font-space-grotesk text-xl p-2 rounded w-[70%] md:w-[60%] mb-[60px]">
                  Search engine <br /> optimization
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                    <path
                      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                      fill="#B9FF66"
                    />
                  </svg>
                  <span className="text-white font-space-grotesk">
                    Learn More
                  </span>
                </div>
              </div>
              <div>
                <img src={illustrate3} alt="logo" />
              </div>
            </div>
          </Link>

          <Link to={"/"}>
            <div className="grid grid-cols-2 bg-grey border border-black border-b-4 rounded-[35px] p-10  hover:translate-x-1 hover:-translate-y-3 hover:ease-in-out hover:duration-100">
              <div>
                <h2 className="bg-green text-black font-space-grotesk text-xl p-2 rounded w-[70%] md:w-[60%] mb-[60px]">
                  Search engine <br /> optimization
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                    <path
                      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                      fill="#B9FF66"
                    />
                  </svg>
                  <span>Learn More</span>
                </div>
              </div>
              <div>
                <img src={illustrate4} alt="logo" />
              </div>
            </div>
          </Link>

          <Link to={"/"}>
            <div className="grid grid-cols-2 bg-green border border-black border-b-4 rounded-[35px] p-10  hover:translate-x-1 hover:-translate-y-3 hover:ease-in-out hover:duration-100">
              <div>
                <h2 className="bg-white text-black font-space-grotesk text-xl p-2 rounded w-[70%] md:w-[60%] mb-[60px]">
                  Content <br /> Creation
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                    <path
                      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                      fill="#B9FF66"
                    />
                  </svg>
                  <span>Learn More</span>
                </div>
              </div>
              <div>
                <img src={illustrate5} alt="logo" />
              </div>
            </div>
          </Link>

          <Link to={"/"}>
            <div className="grid grid-cols-2 bg-black border border-black border-b-4 rounded-[35px] p-10  hover:translate-x-1 hover:-translate-y-3 hover:ease-in-out hover:duration-100">
              <div>
                <h2 className="bg-green text-black font-space-grotesk text-xl p-2 rounded w-[70%] md:w-[60%] mb-[60px]">
                  Analytics and
                  <br /> Tracking
                </h2>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                    <path
                      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                      fill="#B9FF66"
                    />
                  </svg>
                  <span className="text-white">Learn More</span>
                </div>
              </div>
              <div>
                <img src={illustrate6} alt="logo" />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-grey rounded-3xl mt-16">
          <div className="p-16">
            <h2 className="text-black font-space-grotesk text-3xl mb-5 font-bold">
              Let's make things happen
            </h2>
            <p className="text-black font-space-grotesk text-lg mb-5 ">
              contact us today to learn more about how our digest marketing
              service can help your business grow and success online
            </p>
            <button className="bg-black text-white font-space-grotesk text-lg px-4 py-2 rounded-xl">
              Get your Proposal
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={illustrate7}
              alt="logo"
              className="h-[120%] object-cover hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
