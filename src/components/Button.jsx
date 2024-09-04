import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ label }) => {
  return (
    <div className="flex justify-center">
      <button className="flex justify-center items-center gap-3 px-3 py-3 border font-serif rounded-full text-lg text-white bg-red-500 border-red-500">
        {label}
        <FaArrowRight className="rounded-full bg-white text-red-500" />
      </button>
    </div>
  );
};

export default Button;
