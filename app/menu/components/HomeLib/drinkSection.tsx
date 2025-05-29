import React from 'react'
import Image from 'next/image'
import FadeInItem from '@/app/components/FadeInItem';

export default function menuSection() {
  const handleClick = () => {
    window.open('/menu.pdf', '_blank');
  };
  return (
    <div className=" max-md:flex-col-reverse flex justify-center items-center w-full ">
              <div className=" md:w-1/2 max-md:py-10 md:h-[390px] lg:h-[430px] flex  bg-stone-400 items-center justify-center flex-col text-center max-md:w-full">
                  <FadeInItem delay={0}>
                    <h3 className="font-serif text-amber-700 text-4xl ">DRINKS</h3>
                  </FadeInItem>
                  
                  <FadeInItem delay={0.5}>
                    <p className=" mt-5 text-gray-700 text-sm  max-w-[300px]">
                    From authentic freshly brewed coffees to refreshing cold drinks, every cup is crafted with care and passion to deliver an exceptional taste.
                   </p>
                  </FadeInItem>
                  <FadeInItem delay={1}>
                   <button 
                    onClick={handleClick}className="text-amber-700 pb-6 mb-5 pt-10  border-b border-amber-700 w-[150px] h-7  rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm ">VIEW MENU</button>
                   </FadeInItem>
              </div>
              <Image
              src="/images/menu/7-7.jpg"
              alt="menu"
              loading='lazy'
              width={1500}
              height={1500}
              className="object-cover w-full md:w-1/2 h-[300px] md:h-[390px] lg:h-[430px] "
              />
        </div>
    
  )
}
