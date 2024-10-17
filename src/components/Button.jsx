import React from "react";

const Button = ({ text }) => {
  return (
    <div className="text-black p-2 border border-black rounded-lg font-space-grotesk">
      {text}
    </div>
  );
};

export default Button;
