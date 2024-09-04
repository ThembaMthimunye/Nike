import React from "react";
import Button from "../components/Button";
import nike_1 from "../assets/1.jpg";
import { useState } from "react";
import ShoeCard from "../components/ShoeCard"


const Hero = () => {

    const [bigShoeImg,setBigShoeImg]=useState(nike_1)
  return (
    <section className="flex w-full xl:flex-row flex-col justify-center  min-h-screen max-w-1440 mx-auto gap-[10rem] -ml-[5rem] ">
      <div className="">
        <div className="relative xl:w-4/5 flex flex-col justify-center  mt-[15rem] ml-[15rem] justify-center mx-auto ">
          <p className="text-red-500 font-serif text-xl">
            Our Summer collection
          </p>
          <h1 className=" mt-10 font-bold text-8xl font-palanquine ">
            <span>The New Arrival</span>
            <br />
            <span className="text-red-500 mr-3 inline-block mt-[1rem]">
              Nike
            </span>
            Shoes
          </h1>
          <p className="font-serif text-slate-500 text-lg my-10">
            Discover stylish Nike arrival,quality
          </p>
        </div>
        <Button label="Shop Now" />
        <div className="flex justify-center w-full gap-10 mt-20 ">
          <div>
            <p className="text-4xl font-bold font-serif text-center">140+</p>
            <p className="text-gray-400 text-center">Shops</p>
          </div>

          <div>
            <p className="text-4xl font-bold font-serif text-center">125+</p>
            <p className="text-gray-400 text-center">Brand</p>
          </div>

          <div>
            <p className="text-4xl font-bold font-serif text-center">220+</p>
            <p className="text-gray-400 text-center">Customers</p>
          </div>
        </div>
      </div>
      <div className="mt-[6rem]">
        <div className="flex-1 flex justify-center items-center mt-[10rem] ">
          <img
            hight={500}
            width={610}
            className="object-contain relative z-10 rounded-lg shadow-xl"
            src={bigShoeImg}
            alt=""
          />
        </div>
        <div >
            <ShoeCard
            changeBigShoe={
                (shoe)=>{setBigShoeImg(shoe)}   
            }
            bigShoeImg={bigShoeImg}
            />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
