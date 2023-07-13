import React from 'react'
import Logo from '../assets/LandHomes Logo.png'
const Footer = () => {
  return (
    <div className='flex flex-col gap-9 md:gap-4 bg-background mt-[50px] md:flex-row justify-around py-5 w-full items-center'>
        <div className='flex flex-col gap-3 md:items-start'>
           <img src={Logo} alt="" />
           <span className='font-light text-[12px] text-center'>Our vision is to make all people
             <br />  the best place to live for them.</span>
        </div>

        <div>
               <div className='flex flex-col'>
                  <h1 className='text-[37px] font-bold text-tertiary'>LandHomes Inc.</h1>
                  <span className='font-light text-[14px] tracking-wider leading-5 '>Makati City, NCR Metro Manila Philippines</span>
               </div>

               <div className='flex flex-row justify-between w-full gap-5 mt-4 items-center'>
                 <p>Property</p>
                 <p>Services</p>
                 <p>Product</p>
                 <p>About Us</p>
               </div>
        </div>
    </div>
  )
}

export default Footer