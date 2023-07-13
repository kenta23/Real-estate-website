import React, { useState } from 'react'
import Logo from '../assets/LandHomes Logo.png'
import { MoreVertical } from 'lucide-react'
const Navbar = () => {
  const [clicked, setClicked] = useState(false)
 
  return (
    <div className='z-10 '>
        <div className='flex z-10  md:flex-row gap-4 items-center justify-between pt-2'>
            <img src={Logo} alt="logo"  className='cursor-pointer max-w-full h-auto'/>

            <div className={`md:flex-row links gap-3 flex-col absolute md:static right-12 bg-[#1f211b] md:bg-transparent px-2 py-4 rounded-md ${clicked ? 'top-10' : 'top-[-1000px]'}  transition-all duration-200 ease-in-out flex items-start md:gap-6 flex-nowrap  w-auto max-w-full lg:gap-10 justify-between md:items-center`}>
                <a href="" className='font-light md:text-[15px] lg:text-[20px] hover:opacity-80 ease-out duration-150 transition-opacity'>Residencies</a>
                <a href="" className='font-light md:text-[15px] lg:text-[20px] hover:opacity-80 ease-out duration-150 transition-opacity'>Contact</a>
                <a href="" className='font-light md:text-[15px] lg:text-[20px] hover:opacity-80 ease-out duration-150 transition-opacity'>About Us</a>
                <button className='font-light md:text-[15px] lg:text-[20px] hover:active'>Get Started</button>
            </div>
            <div className='md:hidden relative'>
              <MoreVertical size={32} onClick={() => setClicked(!clicked)}/>
           </div>
        </div>
    </div>
  )
}

export default Navbar