import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
// import p1 from "../assets/p1.png"
import { TiStar } from "react-icons/ti";

const PopularCard = () => {
  return (
    <div className="flex gap-10 w-full justify-center items-center mt-10 ">
     <div>
        <img
          className=" size-[15rem] rounded-md shadow-lg border-2"
          src={p1}
          alt=""
        />
        <p className="text-2xl font-serif text-red-500  mt-3">
          R3546
        </p>
        <div className="flex gap-4">
          <TiStar className="text-2xl text-red-500  mt-1" />
          <p className="font-serif text-xl">(4.7)</p>
        </div>
        <div>
            <p className="font-serif text-red-500 mt-3 font-bold">Nike Air Jordan</p>
        </div>
      </div>

      <div>
        <img
          className=" size-[15rem] rounded-md shadow-lg border-2"
          src={p2}
          alt=""
        />
        <p className="text-2xl font-serif text-red-500  mt-3">
          R3546
        </p>
        <div className="flex gap-4">
          <TiStar className="text-2xl text-red-500  mt-1" />
          <p className="font-serif text-xl">(4.7)</p>
        </div>
        <div>
            <p className="font-serif text-red-500 mt-3 font-bold">Nike Air Dunk</p>
        </div>
       
      </div>

      <div>
        <img
          className=" size-[15rem] rounded-md shadow-lg border-2"
          src={p3}
          alt=""
        />
        <p className="text-2xl font-serif text-red-500  mt-3">
          R2345
        </p>
        <div className="flex gap-4">
          <TiStar className="text-2xl text-red-500 -center mt-1" />
          <p className="font-serif text-xl">(4.2)</p>
        </div>
        <div>
            <p className="font-serif text-red-500 mt-3 font-bold">Nike Air Field</p>
        </div>
      </div>

      <div>
        <img
          className=" size-[15rem] rounded-md shadow-lg border-2"
          src={p4}
          alt=""
        />
        <p className="text-2xl font-serif text-red-500  mt-3">
          R4500
        </p>
        <div className="flex gap-4">
          <TiStar className="text-2xl text-red-500 -center mt-1" />
          <p className="font-serif text-xl">(4.3)</p>
        </div>
        <div>
            <p className="font-serif text-red-500 mt-3 font-bold">Nike Air Bux</p>
        </div>
      </div>

      <div>
        <img
          className=" size-[15rem] rounded-md shadow-lg border-2 "
          src={p5}
          alt=""
        />
        <p className="text-2xl font-serif text-red-500 mt-3">
          R3400
        </p>
        <div className="flex gap-4">
          <TiStar className="text-2xl text-red-500 -center mt-1" />
          <p className="font-serif text-xl">(4.8)</p>
        </div>
        <div>
            <p className="font-serif text-red-500 mt-3 font-bold">Nike Air Dubane</p>
        </div> 
      </div>
    </div>
  );
};

export default PopularCard;
