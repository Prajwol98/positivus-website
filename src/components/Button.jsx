import { Link } from "react-router-dom";
const Button = ({ text }) => {
  return (
    <Link to="/">
      <button className="bg-primary text-white font-poppins px-[20px] py-[10px] rounded-full mt-5">
        {text}
      </button>
    </Link>
  );
};

export default Button;
