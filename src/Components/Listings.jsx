import React, { useState } from "react"
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { slideData } from "../Data"

const Listings = () => {

  const [emblaRef] = useEmblaCarousel({ loop: true});
  const [index, setCurrentIndex] = useState(0)

  function previousClick() {
    
      emblaRef.length - 1
  }

  return (
    <div className="text-black flex flex-col gap-4">
       <div >
         <p className="text-primary text-[20px]">Best Choices</p>
         <h1 className="text-tertiary text-[20px] md:text-[35px] font-bold">Popular Residencies</h1>
       </div>

       
     <div className="embla " ref={emblaRef}>
      <div className="embla__container gap-6 justify-between items-start">
           {slideData.map((item, index) => (
             <div className="embla_slide  flex flex-col gap-4 cursor-pointer " key={index}>
                <img className="w-[17rem] max-w-[450px] h-[300px] max-h-[400px] rounded-md object-cover" src={item.image} alt="" />
                <span className="text-primary font-bold text-[1.5rem] md:text-[2rem]">{item.price}</span>
                <h1 className="font-medium text-[20px] md:text-[25px] text-tertiary">{item.title}</h1>
                <span className="font-light text-sm md:text-md">{item.desc}</span>
             </div>
           ))}

           
      </div>
    </div>
     <div className="flex flex-row justify-between">
          
           </div>
    </div>
  )
}

export default Listings