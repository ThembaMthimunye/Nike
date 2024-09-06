import React from 'react'
import pic_1 from "../assets/p-1.jpg"
import pic_2 from "../assets/p-2.jpg"
import pic_3 from "../assets/p-3.jpg"

const SpecialOfferCard = () => {
  return (
    <section >
        <div className='flex justify-center gap-5'>
           <card>
            <img className='size-[15rem] rounded-xl object-cover' src={pic_1} alt="" />
        </card>
        <card>
            <img className='size-[15rem] rounded-xl object-cover' src={pic_2} alt="" />
        </card> 
        </div>
        
        <card className="">
            <img className='h-[15rem] w-[32rem] rounded-xl my-[1rem] object-cover' src={pic_3} alt="" />
        </card>
    </section>
  )
}

export default SpecialOfferCard
