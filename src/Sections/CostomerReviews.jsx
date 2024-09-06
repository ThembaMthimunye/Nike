import React from "react";
import ReviewCard from "../components/ReviewCard";

const CostomerReviews = () => {
  return (
    <section className="bg-[#e4eff0]">
      <div className="bg-white-900">
        <h3 className="text-4xl text-center font-semibold">
          What Our <span className="text-red-500">Customers</span> Say ?
        </h3>
        <p className="text-center mx-[38rem] my-5">
          Hear genuine stories from our satisfied customers about their
          exceptional experience with us.
        </p>
      </div>
      <ReviewCard/>
    </section>
  );
};

export default CostomerReviews;
