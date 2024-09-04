import React from "react";
import smallshoe_1 from "../assets/2.png";
import smallshoe_2 from "../assets/3.png";
import smallshoe_3 from "../assets/4.png";

const ShoeCard = ({changeBigShoe,bigShoeImg}) => {
    const handleClick=()=>{
        if (bigShoeImg!==smallshoe_1)
        {
            changeBigShoe(smallshoe_1)
        }
    }

    const handleClick2=()=>{
        if (bigShoeImg!==smallshoe_2)
        {
            changeBigShoe(smallshoe_2)
        }
    }

    const handleClick3=()=>{
        if (bigShoeImg!==smallshoe_3)
        {
            changeBigShoe(smallshoe_3)
        }
    }
  return (
    <div className="flex gap-10 justify-center items-center mt-10">
      <img className={`rounded-lg border-2 shadow-lg ${bigShoeImg===smallshoe_1  ? 'border-coral-red' :'border-transparent'} cursor-pointer` } onClick={handleClick} hight={70} width={81} src={smallshoe_1} alt="" />
      <img className={`rounded-lg border-2 shadow-lg ${bigShoeImg===smallshoe_2  ? 'border-coral-red' :'border-transparent'} cursor-pointer` } onClick={handleClick2} hight={70} width={81} src={smallshoe_2} alt="" />
      <img className={`rounded-lg border-2 shadow-lg ${bigShoeImg===smallshoe_3  ? 'border-coral-red' :'border-transparent'} cursor-pointer` } onClick={handleClick3} hight={70} width={81} src={smallshoe_3} alt="" />
    </div>
  );
};

export default ShoeCard;
