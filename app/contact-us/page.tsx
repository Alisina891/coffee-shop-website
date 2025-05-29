'use client';
import React from 'react';
import Image from 'next/image';
import FadeInItem from '@/app/components/FadeInItem';
import Link from 'next/link';



export default function page() {
    const handleClick = () => {
        window.open("https://www.google.com/maps/place/Canada/@64.9790728,-117.6234264,3z/data=!4m6!3m5!1s0x4b0d03d337cc6ad9:0x9968b72aa2438fa5!8m2!3d56.130366!4d-106.346771!16zL20vMGQwNjBn?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D", '_blank');
    }

  return (
    <div className="pt-20 bg-stone-700 px-3 md:px-8">
          <div className="flex justify-center bg-stone-700 items-center w-full md:hidden">
                <Image
                src="/images/logo/logo.jpg"
                alt="Logo"
                loading='lazy'
                width={90}
                height={90}
                className="rounded-full h-[80px] w-[90px] min-w-[220px] object-cover"
                />
               
            </div>
            <div className="w-full flex flex-col md:items-center mt-12 bg-stone-300 md:px-[58px] md:pt-[58px] ">
               <Image
                src="/images/contact/map.jpg"
                alt="backG"
                loading='lazy'
                width={1500}
                height={2200}
                className="object-cover"
                />
    
             <div
                
                 className="flex flex-col justify-center items-center w-full ">
                <FadeInItem delay={0.3}>
                    <button onClick={handleClick}
                        className="  text-amber-700 pb-2 mb-5 pt-10  border-b border-amber-700 w-[250px]    rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm ">VIEW IN GOOGLE MAPS
                    </button>
                </FadeInItem>
                
                </div>

                <FadeInItem delay={0.5}>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5 pt-10 pb-16 max-md:w-full max-md:justify-center max-md:items-center">
                    <div>
                      <p className='text-gray-600  text-sm max-w-[250px]' >
                        Monday – Saturday: 12 noon until late
                        Sunday: 12noon until 5pm
                      </p>

                      <p className='text-gray-600  text-sm max-w-[250px] mt-4' >
                        5th Floor, Customs House
                        31 Alfred Street, Circular Quay NSW 2000
                      </p>
                    </div>

                    <div>
                      <p className='text-gray-600  text-sm max-w-[250px]' >
                        +93780031643<br/>
                        alisinai902.com
                      </p>

                      <p className='text-gray-600  text-sm max-w-[250px] mt-4' >
                        Cafe Sydney observes a smart dress code.
                        1.5% credit card surcharge applies.
                        15% Public Holiday surcharge applies.
                      </p>
                    </div>
                    
                    </div>
                </FadeInItem>

                <FadeInItem delay={0.5}>

                <div className='max-md:flex max-md:flex-col md:grid md:grid-cols-2 gap-5 pb-16 max-md:w-full max-md:justify-center max-md:items-center'>
                   
                    <div className=' w-full md:w-[250px] bg-white  justify-center items-center h-[110px] flex md:px-16'>
                        <Link href='/reservation'
                        className="flex justify-center items-center  text-amber-700 pb-2 mb-5 pt-10  border-b border-amber-700 w-[200px]    rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm ">MAKE A RESERVATION
                    </Link>
                    </div>

                
                    <div className='w-full md:w-[250px] bg-white  justify-center items-center h-[110px] flex md:px-16'>
                        <Link href='/reservation'
                        className="flex justify-center items-center  text-amber-700 pb-2 mb-5 pt-10  border-b border-amber-700 w-[200px]    rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm ">MAKE AN EVENT <br/> 
                        ENQUIRY
                    </Link>
                    </div>
                    
                    <div className='w-full md:w-[250px] bg-white  justify-center items-center h-[110px] flex md:px-16'>
                        <Link href='/privacy-policy'
                        className="flex justify-center items-center text-amber-700 pb-2 mb-5 pt-10  border-b border-amber-700 w-[200px]    rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm uppercase ">Privacy Policy
                    </Link>
                    </div>
                    <div className='w-full md:w-[250px] bg-white  justify-center items-center h-[110px] flex md:px-16'>
                        <Link  href='/frequently-asked-question'
                        className=" flex justify-center items-center  text-amber-700 pb-2 mb-5 pt-10  border-b border-amber-700 w-[200px]    rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm ">FAQ&#39;S
                        </Link>
                    </div>
                </div>

                </FadeInItem>

            </div>

                
        </div>
  )
}
