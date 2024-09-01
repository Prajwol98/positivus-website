import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const datas = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Benefits", link: "/Benefits" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="flex justify-between items-center bg-primary p-[20px]">
      <div>
        <a href="#">
          <img
            src="../public/companylogo.png"
            alt="img"
            className="object-contain"
          />
        </a>
      </div>
      <div>
        <ul className="hidden md:flex gap-[31px] text-white font-poppins">
          {datas.map((data, index) => {
            return (
              <li key={index}>
                <a href={data.link}>{data.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:flex">
        <button className="text-white font-bold mr-[25px] rounded-full font-poppins">
          Login
        </button>
        <button className="bg-white font-poppins text-black font-bold py-[12px] px-[20px] rounded-full">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={handleClick} className="md:hidden text-white text-2xl">
        {open ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Menu Items */}
      {open && (
        <ul className="flex flex-col items-center gap-[20px] text-white font-poppins absolute top-[60px] left-0 bg-primary w-full p-4 md:hidden">
          {datas.map((data, index) => {
            return (
              <li key={index}>
                <a href={data.link}>{data.name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
