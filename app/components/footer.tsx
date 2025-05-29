import React from 'react'
import Image from 'next/image'
export default function footer() {
  return (
    <section className='flex justify-center items-center  bg-stone-700  '>
      <div  className='w-full flex max-w-screen-2xl justify-start  max-md:flex-col md:justify-between  bg-gray-900 pl-3'>
        <div className='flex flex-col items-start  w-full text-gray-300 pt-10 md:pl-5 text-[10px] '>
          <h3 className='text-white font-semibold'>MENU</h3>
          <button className=' mt-1 md:mt-2 text-amber-700 transition-all duration-200 '>Home</button>
          <button className='text-white  hover:text-amber-700 transition-all duration-200'>About Us</button>
          <button className='text-white hover:text-amber-700 transition-all duration-200'>Menus</button>
          <button className='text-white hover:text-amber-700 transition-all duration-200'>What's On</button>
          <button className='text-white hover:text-amber-700 transition-all duration-200'>Gallery</button>
          <button className='text-white  hover:text-amber-700 transition-all duration-200'>Contact Us</button>
          
          
        </div>

        <div className='flex flex-col items-start   w-full text-gray-300 pt-10 text-[10px] '>
          <h3 className='text-white font-semibold'>INFORMATION</h3>
          <button className=' mt-1 md:mt-2 hover:text-amber-700 text-white transition-all duration-200 '>Event Enquiry</button>
          <button className='text-white  hover:text-amber-700 transition-all duration-200'>Dining FAQ'S</button>
          <button className='text-white hover:text-amber-700 transition-all duration-200 w-auto'>Shop and Gift Card FAQ'S</button>
          <button className='text-white hover:text-amber-700 transition-all duration-200'>Privacy Policy</button>
          <button className='text-white hover:text-amber-700 transition-all duration-200'>Terms & Conditions</button>
        </div>

        <div className='flex flex-col items-start  w-full text-gray-300 pt-10  text-[10px]'>
          <h3 className='text-white font-semibold'>LOCATION</h3>
          <p className=' mt-1 d:mt-2'>Our Coffee Shop <br/> 5th Floor, Customs House <br/> 31 Fahim Street,<br/> Circdular Quay, <br/>NSW,3000</p>
          <p className=' md:mt-3 text-amber-700'>Call +93780031643</p>
          <button className='text-amber-700'>alisinai902@gamil.com</button>
          <button className='text-amber-700'>View on Google Maps--</button>  
        </div>

        <div className='flex flex-col items-start  w-full text-gray-300 pt-5 md:pt-10  text-[10px]'>
          <h3 className='text-white font-semibold'>OPENNING HOURS <br/> LUNCH & DINNER</h3>
          <p className='max-w-[px]'>Monday-Saturday:<br/> 12 noon until late <br/>Sunday: 12 noon until 5pm</p>

          <button
            className="w-[125px] h-[20px] mt-5  bg-amber-700 text-gray-200  text-[10px] font-semibold
            hover:bg-gray-300 hover:text-gray-700 hover:shadow-sm hover:shadow-gray-90   transition-colors duration-300"
          >
            MAKE A RESERVATION
          </button>
           
         </div>

        <div className='flex flex-col items-start  w-full text-gray-300 pt-3 md:pt-10  text-[10px] '>
          <button
            className="w-[150px] h-[20px]   bg-gray-300 text-gray-700  text-[10px] font-semibold
            hover:bg-amber-700 hover:text-gray-200 hover:shadow-sm hover:shadow-gray-90   transition-colors duration-300"
          >
            SIGN UP FOR NEWSLETTER
          </button>

          <p className=' mt-4  max-w-[250px] pr-3'>We acknowledge the Traditional Custodians of this land upon which our coffee shop sits, the Gadigal people of the Eora Nation. We recognise their continuing connection and spiritual relationship to the land, water and community. We pay our deepest respects to them and their culture, and to Elders, past, present and emerging</p>

          <div className='flex justify-center items-center mt-5 gap-1'>
            <Image
            alt='Facebook'
            src='/images/logo/face.png'
            width={30}
            height={30}
            className=' cursor-pointer'
            />

            <Image
            alt='Facebook'
            src='/images/logo/insta.png'
            width={30}
            height={30}
            className='cursor-pointer'
            />
          </div>
           
         </div>

      </div>
    </section>
  )
}
