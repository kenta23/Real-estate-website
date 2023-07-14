import House from '../assets/House.jpg'
import CountUp from 'react-countup'
import { MapPin } from 'lucide-react'
import {  motion } from 'framer-motion'



const Hero = () => {
  return (
    <div className='mt-10 md:mt-32 z-10 relative padding-top'>
        <div className='flex flex-col gap-8 md:flex-row  items-center justify-between '>
            <div className='gap-7  flex flex-col items-start'>
              <motion.div initial={{ y:"2rem", opacity: 0}} animate={{ y: 0, opacity: 1}} transition={{ duration: 2, type: "spring"}} className='flex flex-col gap-2'>
               <h1 className='text-[30px] md:text-[2.5rem] lg:text-[4rem]'>Discover <br /> Most Suitable <br /> Property</h1>
                <span className='font-extralight text-[10px] md:text-[15px] lg:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <span className='font-extralight text-[10px] md:text-[15px] lg:text-[20px]'>Facere saepe quod animi id minus iste voluptatibus assumenda hic quos quae reprehenderit nihil cumque eum, illo error.</span>
              </motion.div> 

                <div className='bg-[#abb496] py-2 px-2 rounded-lg flex flex-row gap-2 items-center '>
                    <MapPin size={40} />
                    <input className='border-0 outline-none text-white indent-4 w-full h-full bg-[#abb496] ' type="text" />
                    <button type='button' className='px-6 py-2 bg-tertiary rounded-md cursor-pointer'>Search</button>
                </div>
                
                <div className='flex flex-row justify-between gap-8 items-center'>
                    <div>
                        <CountUp className='text-[20px] md:text-[25px] font-bold lg:text-[30px]' start={8890} end={9000} duration={10}/><span className='text-primary font-bold'>+</span>
                        <p>Premium Product</p>
                    </div>
                    <div>
                        <CountUp className='text-[20px] md:text-[25px] font-bold lg:text-[30px]' start={8240} end={8978} duration={10}/><span className='text-primary font-bold'>+</span>
                        <p>Trusted Customers</p>
                    </div>
                    <div>
                        <CountUp className='text-[20px] md:text-[25px] font-bold lg:text-[30px]' start={190} end={225} duration={10}/><span className='text-primary font-bold'>+</span>
                        <p>Awards winning</p>
                    </div>
                </div>
            </div>

            <motion.div initial={{ x: "2rem", opacity: 0 }} animate={{ x: 0, opacity: 1}} transition={{ duration: 2, type: "spring" }}  className=''>
                 <div className='w-[20rem] h-[25rem] lg:w-[25rem] relative lg:h-[30rem] rounded-t-[160px]'>
                        <img src={House} alt="" className='absolute rounded-t-[160px] border-[12px] border-[#5d8013] max-w-full h-full object-cover object-center' />
                 </div>

             </motion.div>
        

        </div>

       
    </div>
  )
}

export default Hero