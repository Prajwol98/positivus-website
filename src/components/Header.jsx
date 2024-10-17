import React from "react";
import companyLogo from "../assets/company-logo.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const lists = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  return (
    <div className="bg-white container mx-auto flex justify-between py-10 md:mb-10 md:px-20">
      <div>
        <img src={companyLogo} alt="logo" className="w-[120px] md:w-[150px]" />
      </div>
      <div>
        <ul className="flex items-center gap-4 ">
          {lists.map((list, index) => {
            return (
              <li key={index}>
                <Link
                  to={list}
                  className="text-black font-space-grotesk text-lg hover:text-[#B9FF66]"
                >
                  {list}
                </Link>
              </li>
            );
          })}
          <Button text={"Request a quote"}></Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
