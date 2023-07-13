import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Companies from './Components/Companies'
import Listings from './Components/Listings'

import Services from './Components/Services'
import Contact from './Components/Contact'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer'
function App() {


  return (
    <div className='text-white'>
      <div className='bg-[#d0dbb8] blur-[120px] opacity-70 rounded-full w-[25rem] h-[25rem] absolute top-2 left-2  '/>
   <div className='bg-background'>
      <div className='z-20 md:px-[150px] lg:px-[220px] md:mx-auto  text-white p-[25px]'>
         <Navbar />
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
