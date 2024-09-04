import React from "react";
import PopularCard from "../components/PopularCard";

const PopularProducts = () => {
  return (
    <section>
      <div className="flex flex-col justify-start gap-5 mt-[5rem] ml-[15rem]">
        <h2 className="text-4xl font-palanquine font-bold">Our <span className="text-red-500">Popular</span> Products</h2>
        <p className="font-serif mt-5 text-gray-500 max-w-[30rem]" >
          Experience top-notch quality and style with our sought-after
          selections .discover a world of comfport,design,and value
        </p>
      </div>
      <PopularCard/>
    </section>
  );
};

export default PopularProducts;
