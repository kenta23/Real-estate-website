import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Companies from './Components/Companies'
import Listings from './Components/Listings'

import Services from './Components/Services'
import Contact from './Components/Contact'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer'

import { useState, useEffect } from 'react'

function App() {

 const [isNavbarFixed, setIsNavbarFixed] = useState(false);

useEffect(() => {
  function handleScroll() {
    const navbar = document.querySelector('.navbar'); // Assuming you have a CSS class 'navbar' for the navbar element

    if (window.scrollY > navbar.offsetTop) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className='text-white'>
      <div className='bg-[#d0dbb8] blur-[120px] opacity-70 rounded-full w-[25rem] h-[25rem] absolute top-2 left-2  '/>
   <div className='bg-background'>

       <div className={`md:fixed navbar ${isNavbarFixed ? 'md:bg-shadow md:shadow-lg md:shadow-shadow ' : ''} transition-colors duration-150 ease-in w-full z-50 md:px-[150px] lg:px-[220px] md:mx-auto p-[25px]`} >
          <Navbar />
       </div>
      <div className='z-20 md:px-[150px] lg:px-[220px] md:mx-auto  text-white p-[25px]'>
         
         <Hero />
      </div>
      
   </div>

  <div className='md:px-[150px] lg:px-[220px] md:mx-auto p-[25px]'>
        <Companies />
        <Listings />
        <Services />
        <Contact />
        <GetStarted />     
  </div>
      <Footer />
  </div>
  )
}

export default App
