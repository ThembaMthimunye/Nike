import React from "react";
import { TiStar } from "react-icons/ti";

import image1 from "../assets/p_1.jpg";
import image2 from "../assets/p_2.jpg";
import image3 from "../assets/p_3.jpg";


const ReviewCard = () => {
  return (
    <section className="flex justify-center gap-[5rem] p-10 ">
      <card className="flex justify-center border-2 shadow-xl rounded-md p-7">
        <div className=" shadow-[500px]">
          <img
            className="size-[10rem] object-cover rounded-full mx-auto my-9"
            src={image1}
            alt=""
          />
          <p className="text-gray-500">
            I have placed orders before with Nike.com never disappointed This
            time I placed an order on the 31 July 2024 and expected delivery was
            the 18 August 2024 Today the 19th August still never received my
            order with communication from Nike which I find very unprofessional
            so I decided to call the call center the service I received was
            absolutely ridiculous they don't call you back claiming they font
            have the facilities to call a ...
          </p>
          <div className="flex my-3 justify-center gap-3 font-serif font-semibold text-xl">
            <TiStar className="text-2xl text-red-500  mt-" />
            <p>(4)</p>
          </div>
          <p className="font-serif font-semibold text-xl text-center">Themba Mthimunye</p>
        </div>
      </card>

      <card className="flex justify-center border-2 shadow-xl rounded-md p-7">
        <div className=" shadow-[500px] ">
          <img
            className="size-[10rem] object-cover rounded-full mx-auto my-9"
            src={image2}
            alt=""
          />
          <p className="text-gray-500">
            I have placed orders before with Nike.com never disappointed This
            time I placed an order on the 31 July 2024 and expected delivery was
            the 18 August 2024 Today the 19th August still never received my
            order with communication from Nike which I find very unprofessional
            so I decided to call the call center the service I received was
            absolutely ridiculous they don't call you back claiming they font
            have the facilities to call a ...
          </p>
          <div className="flex my-3 justify-center gap-3 font-serif font-semibold text-xl">
            <TiStar className="text-2xl text-red-500  " />
            <p>(5)</p>
          </div>
          <p className="font-serif font-semibold text-xl text-center">Nicole Pule</p>
        </div>
      </card>

      <card className="flex justify-center border-2 shadow-xl rounded-md p-7">
        <div className=" shadow-[500px] ">
          <img
            className="size-[10rem] object-cover rounded-full mx-auto my-9"
            src={image3}
            alt=""
          />
          <p className="text-gray-500">
            I have placed orders before with Nike.com never disappointed This
            time I placed an order on the 31 July 2024 and expected delivery was
            the 18 August 2024 Today the 19th August still never received my
            order with communication from Nike which I find very unprofessional
            so I decided to call the call center the service I received was
            absolutely ridiculous they don't call you back claiming they font
            have the facilities to call a ...
          </p>
          <div className="flex my-3 justify-center gap-3 font-serif font-semibold text-xl">
            <TiStar className="text-2xl text-red-500  " />
            <p>(2)</p>
          </div>
          <p className="font-serif font-semibold text-xl text-center">Sindi Dube</p>
        </div>
      </card>

    </section>
  );
};

export default ReviewCard;
