import React from 'react'
import house from '../assets/ravi-avaala-2d4lAQAlbDA-unsplash.jpg'
import AccordionServices from './AccordionServices'


const Services = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-8 items-center justify-between '>
        <div className=' p-[40px]'>
            <div className='md:w-[390px] md:h-[490px] w-[200px] max-w-[470px] h-[240px]'>
               <img src={house} className='object-cover border-8 border-primary h-full w-full  rounded-t-[50%] ' alt="" />
            </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-6'>
            <div className='text-black'>
               <h1 className='text-[20px] md:text-[2rem] font-bold text-tertiary'>Value we give to you</h1>
               <p className='text-[10px] md:text-[14px] font-light text-slate-600'>We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better</p>
            </div>

          
              <AccordionServices />
          
        </div>
    </div>
  )
}

export default Services