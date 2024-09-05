import React from 'react'
import pic_1 from "../assets/p-1.jpg"
import pic_2 from "../assets/p-2.jpg"
import pic_3 from "../assets/p-3.jpg"

const SpecialOfferCard = () => {
  return (
    <section className='flex justify-center'>
        <div className='flex '>
           <card>
            <img className='size-[35rem]' src={pic_1} alt="" />
        </card>
        <card>
            <img src={pic_2} alt="" />
        </card> 
        </div>
        
        <card>
            <img src={pic_3} alt="" />
        </card>
    </section>
  )
}

export default SpecialOfferCard
