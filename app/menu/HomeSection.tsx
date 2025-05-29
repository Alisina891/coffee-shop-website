'use client'
import MenuSection from "./HomeLib/menuSection";
import EventSection from "./HomeLib/eventSection";
import DrinkSection from "./HomeLib/drinkSection";
import Image from "next/image"
import FadeInItem from '@/app/components/FadeInItem';

export default function HomeSection() {

  return (
    <div className="pt-20">
      <div className="flex justify-center bg-stone-700 items-center w-full md:hidden">
            <Image
            src="/images/logo/logo.jpg"
            alt="Logo"
            width={90}
            height={90}
            className="rounded-full h-[80px] w-[90px] min-w-[220px] object-cover"
            />
           
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-12 bg-stone-300 md:px-[58px] md:pt-[58px] ">
           <Image
            src="/images/bg5.jpg"
            alt="backG"
            width={1500}
            height={2200}
            className="object-cover"
            />

            <div
            
             className="flex flex-col justify-center items-center w-full ">
              <FadeInItem delay={0}>
              <p className="text-gray-500  mt-[3vw]"  >EST. <span className="ml-1">2010</span>
              </p>
              </FadeInItem>

              <FadeInItem delay={0.7}>
              <h3 className="font-serif text-amber-700 text-4xl my-3 ">COFFEE SHOP</h3>
              </FadeInItem>
              
              <FadeInItem delay={1.3}>
              <div className="flex-col lg:max-w-[700px] justify-start items-center text-start pl-1 pr-9 pt-3 pb-10 max-md:pl-3 max-md:pr-8 ">
                <p className="text-gray-600 text-sm " >

                    Our journey began in 2019 with a simple idea: to create a warm and inviting space where people could enjoy high-quality coffee and take a break from the fast pace of daily life. We started with a passion for great coffee and a desire to build something meaningful in the heart of the community.
                </p>
                <p className="text-gray-600 text-sm mt-3" >                   
                    From day one, we’ve focused on sourcing the best beans and preparing each cup with care. Whether it’s a flat white on the go or a hand-poured filter to enjoy slowly, every drink we serve reflects our love for the craft.
                </p>
                <p className="text-gray-600 text-sm mt-3 " >  
                  Though a few years have passed since we opened, our story is far from over. We continue to grow, learn, and improve — always staying true to the values we started with: quality, care, and community.
                </p>
              </div>
              </FadeInItem>

              <FadeInItem delay={1.5}>
              <button className="text-amber-700  pb-5 mb-10 px-3 border-b border-amber-700 w-[200px] h-7  rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-300 text-sm ">MAKE A RESERVATION</button>
              </FadeInItem>
            </div>
        </div>

        <MenuSection />
        <EventSection />
        <DrinkSection />
    </div>
  )
}
