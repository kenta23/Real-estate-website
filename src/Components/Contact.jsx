import { Phone, Video, MessageSquare, Mail } from 'lucide-react'
import Home from '../assets/House.jpg'


const contactData = [
    {
        icon: <Phone className='py-2 px-3 rounded-full bg-[#262920] ' color={'#99D717'} size={'45px'}/>,
        title: 'Call',
        number: '+639489120162',
        buttonText: 'Call now'
    },
    {
        icon: <MessageSquare className='py-2 px-3 rounded-full bg-[#262920] ' color={'#99D717'} size={'45px'}/>,
        title: 'Chat',
        number: 'me/landhomes.ph',
        buttonText: 'Chat now'
    },
    {
        icon: <Video className='py-2 px-3 rounded-full bg-[#262920] ' color={'#99D717'} size={'45px'}/>,
        title: 'Video Call',
        number: '+072889123',
        buttonText: 'Video Call now'
    },
    {
        icon: <Mail className='py-2 px-3 rounded-full bg-[#262920] ' color={'#99D717'} size={'45px'}/>,
        title: 'Message',
        number: '+639489120162',
        buttonText: 'Message now'
    }
]

const Contact = () => {
  return (
    <div className='flex mt-[45px] min-w-fit  text-black lg:flex-row flex-col gap-2 justify-between items-center'>
        <div className='flex flex-col gap-8 items-start justify-between '>
            <div>
                <span className='text-tertiary font-bold md:text-[20px]'>Contact Us</span>
                <h1 className='font-bold md:text-[35px] text-[#739628]'>Our Contact Information</h1>
                <span className='text-slate-700 font-light text-[12px] md:text-[15px] lg:text-[19ox]'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
            </div>
           
           <div className='grid md:grid-cols-2 mx-auto md:mx-0 col-span-12 gap-6'>
              {contactData.map((item, index) => (
                <div className='flex flex-col  justify-start gap-4 w-full min-w[240px] max-w-[290px] px-7 py-3 rounded-md hover:scale-105 transition-all duration-200 ease-in cursor-pointer bg-[#e9f1d9] shadow-md' key={index}>
                    <div className='flex justify-start gap-8 items-start'>
                     <div>
                       {item.icon }
                     </div>  

                       <div>
                        <h1 className='font-bold text-tertiary text-[20px]'>{item.title}</h1>
                        <span className='font-light'>{item.number}</span>
                       </div>
                        
                    </div>
                    <div>
                       <button className=' w-full px-2 py-4 bg-secondary text-black hover:bg-[rgba(192,242,85,0.7)] duration-200 ease-in font-bold'>{item.buttonText}</button>
                    </div>
                </div>
              ))}

           </div>
        
        </div>

        <div className='justify-self-center mx-auto'>
            <div className='md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[450px] w-[200px] max-w-[470px] h-[240px]'>
                <img src={Home} alt="" className='object-cover shadow-lg h-full w-full  rounded-t-[50%] '/>
            </div>

        </div>
    </div>
  )
}

export default Contact