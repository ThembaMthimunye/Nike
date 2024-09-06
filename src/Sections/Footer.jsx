import React from "react";
import logo from "../assets/download.webp";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex bg-black text-white gap-[15rem] h-[30rem]">
      <div className="ml-[20rem] ">
        <div className="flex ">
          <img src={logo} alt="" className="size-[5rem] my-10 " />
          <h3 className="text-3xl font-bold mt-[4rem] ml-[1rem]">Nike</h3>
        </div>

        <p className="max-w-[28rem] text-xl">
          Get shoes ready for the new term at your nearest nike store.Find your
          perfect Size in store.get Rewards
        </p>
        <div className="flex my-10">
          <FaFacebook className="size-[3rem]" />
          <FaTwitterSquare className="size-[3rem]" />
          <FaInstagram className="size-[3rem]" />
        </div>
      </div>

      <div className="flex gap-[10rem] my-10">
        <div className="">
          <p className="text-xl my-5 font-bold">Products</p>
          <p>Air Force 1</p>
          <p>Air Max 1</p>
          <p>Air Force 2</p>
          <p>Nike Race</p>
        </div>
        <div className="">
          <p className="text-xl my-5 font-bold">Help</p>
          <p>About Us</p>
          <p>FAQ's</p>
          <p>How It Works</p>
          <p>Privacy Policy</p>
        </div>

        <div className="">
          <p className="text-xl my-5 font-bold">Get In Touch</p>
          <p>costomer@nike.com</p>
          <p>0786490983</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
