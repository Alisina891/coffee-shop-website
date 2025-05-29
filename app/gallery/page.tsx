import React from 'react';
import FadeInSection from '@/app/components/FadeInItem';
import GallerySection from './components/gallerty';
const images = [
  "/images/gallery/5.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/1.jpg",
  "/images/gallery/1.jpg",
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/1.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];



export default function page() {
  return (
    <main className=' md:flex justify-center items-center bg-stone-700   md:px-5 lg:px-6 '>
          <div className='flex flex-col max-w-screen-2xl   pt-[110px] justify-center items-center  lg:px-48 px-3'>
            <FadeInSection delay={0.3}>     
                <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-5xl  font-serif w-full text-center'>GALLERY
                </h2>
            </FadeInSection> 

            <GallerySection
             images={images} />
            
          </div>
        </main>
  )
}
