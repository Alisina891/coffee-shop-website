'use client'
import MenuSection from './HomeLib/menuSection';
import EventSection from "./HomeLib/eventSection";
import DrinkSection from "./HomeLib/drinkSection";
import Image from "next/image"
import FadeInItem from '@/app/components/FadeInItem'

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
            src="/images/menu/bg-menu.jpg"
            alt="backG"
            width={1500}
            height={2200}
            className="object-cover"
            />

            <div
            
             className="flex flex-col justify-center items-center w-full ">
              <FadeInItem delay={0}>
              <p className="text-gray-500  mt-[3vw]"  >COFFEE SHOP
              </p>
              </FadeInItem>

              <FadeInItem delay={0.7}>
              <h3 className="font-serif text-amber-700 text-4xl my-3 ">MENUS</h3>
              </FadeInItem>
              
              <FadeInItem delay={1.3}>
              <div className="flex-col lg:max-w-[700px] justify-start items-center text-center pl-1 pr-9 pt-3 pb-10 max-md:pl-3 max-md:pr-8 ">
                <p className="text-gray-600 text-sm  max-w-[400px]" >
                  Led by innovative head chef Ali, Coffee Shop is dedicated to crafting a distinctive modern dining experience by sourcing the freshest seasonal ingredients and working closely with local producers and suppliers.
                </p>
              </div>
              </FadeInItem>
            </div>
        </div>

        <MenuSection />
        <EventSection />
        <DrinkSection />
        <EventSection />
        <DrinkSection />
        <EventSection />
    </div>
  )
}
