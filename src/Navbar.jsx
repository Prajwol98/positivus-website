import React from "react";

const Navbar = () => {
  const datas = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Benefits",
      link: "/Benefits",
    },
    {
      name: "pricing",
      link: "/pricing",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-primary p-[20px] ">
        <div>
          <a href="#">
            <img
              src="../public/companylogo.png"
              alt="img"
              className="h-[50] w-[50]"
            />
          </a>
        </div>
        <div className="flex gap-[31px] text-white font-poppins">
          {datas.map((data) => {
            return (
              <ul>
                <li>
                  <a href="">{data.name}</a>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <button className=" text-white font-bold mr-[25px] rounded-full font-poppins">
            Login
          </button>
          <button className="bg-white font-poppins text-black font-bold py-[12px] px-[20px] rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
