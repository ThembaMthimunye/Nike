import React from "react";
import Button from "../components/Button";
import main_img from "../assets/main_img.jpg";

const SuperQuality = () => {
  return (
    <section>
      <div className="flex ">
        <div className="max-w-[30rem] mx-[15rem] mt-[17rem] ">
          <h2 className="text-4xl font-semibold ">
            We Provide You With{" "}
            <span className="text-red-500">Super Quality </span> Shoes
          </h2>
          <div className="my-7 text-gray-600">
            <p>
              Ensuring premium comfort and style,our meticulously crafted
              footwear is designed to elevate your experience providing you with
              unmatched quality,innovation and tourch of elegance
            </p>
            <p className="my-8">
              Our dedication to detail and excellence ensures your sartisfaction
            </p>
          </div>
          <Button label="View Details"></Button>
        </div>
        <div className="mt-[11rem] mb-[5rem]">
          <img width={570} height={30} className="shadow-lg rounded-lg" src={main_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
