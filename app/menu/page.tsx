import React from 'react'
import MenuSection from './components/HomeSection';

export default function page() {
  return (
    <main className=" flex min-h-screen flex-col items-center bg-stone-700 ">
                  <div className=" flex flex-col items-center justify-start max-w-screen-2xl bg-stone-700  px-2 md:px-7 ">
            
                    <MenuSection />
                  </div>
    
      </main>
  )
}
