import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section>
      <div className="my-[7rem]">
        <h1 className="text-5xl font-bold text-center">
          Sign Up For <span className="text-red-500">Updates </span>& Newsletter
        </h1>
        <div className="flex gap-10 mt-[5rem]">
          <input
            type="text"
            className="w-[40rem] border-2 border-gray-200 h-[3rem] rounded-[20px] ml-[50rem] "
          /><Button label={"sign up"} className="" />
        </div>
        
      </div>
    </section>
  );
};

export default Subscribe;
