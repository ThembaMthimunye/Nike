import React from "react";
import Button from "../components/Button";
import SpecialOfferCard from "../components/SpecialOfferCard";
const SpecialOffer = () => {
  return (
    <section className=" flex ml-[25rem] my-[10rem]  gap-[7rem] justify-center">
      <SpecialOfferCard />
      <div>
        <div>
          <h1 className="text-5xl font-semibold">
            <span className="text-red-500">Special</span> Offer
          </h1>
        </div>
        <div className="text-gray-500">
          <p className="my-[2rem] max-w-[40rem]">
            Embark on a shopping journey that redefines your experience with
            unbeatatble deals.From your premier selection to incredible
            savings,we offer unparralled value that sets us apart.
          </p>
          <p className="my-[2rem] max-w-[40rem]">
            Navigate a realm of possibilities designed to fulfill your unique
            desires,surpasing the loftiest expectations.Your journey with us is
            nothing
          </p>
          <div className="flex gap-10">
            <Button label={"Shop Now"} />
            <button className="flex justify-center items-center gap-3 px-3 py-3 border font-serif rounded-full text-lg text-gray-500  border-gray-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
