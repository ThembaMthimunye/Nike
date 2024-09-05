import React from "react";
import { GiLovers } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const Services = () => {
  return (
    <section>
      <div className="flex max-container flex-wrap gap-[3rem] justify-center">
        <div className="">
          <div className="border-2 rounded-xl shadow-md size-[17rem] ">
            <GiLovers className="text-red-500 size-[2rem] ml-10 mt-10 " />
            <h4 className="font-serif font-bold my-5 ml-10 ">
              Love To Help You
            </h4>
            <p className="px-10 text-gray-500">
              Our Dedication is here to assist you every steo of the way
            </p>
          </div>
        </div>
        <div className="">
        <div className="border-2 rounded-xl shadow-md size-[17rem] ">
          <FaShippingFast className="text-red-500 size-[2rem] ml-10 mt-10 " />
          <h4 className="font-serif font-bold my-5 ml-10 ">Free Shipping</h4>
          <p className="px-10 text-gray-500"> Our Dedication is here to assist you every steo of the way</p>
        </div>
      </div>
      <div className="">
        <div className="border-2 rounded-xl shadow-md size-[17rem] ">
          <GrSecure className="text-red-500 size-[2rem] ml-10 mt-10 " />
          <h4 className="font-serif font-bold my-5 ml-10 ">Secure Payments</h4>
          <p className="px-10 text-gray-500"> Our Dedication is here to assist you every steo of the way</p>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default Services;
