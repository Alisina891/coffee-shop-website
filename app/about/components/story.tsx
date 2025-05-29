import Image from 'next/image';
import FadeInSection from '@/app/components/FadeInItem';

export default function story() {
  return (
    <div className='flex flex-col justify-center text-start justify-items-center text-black px-[15px]  max-w-[820px]'>
        <div className='w-full jus'>
           <FadeInSection delay={0.2}>     
          <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-5xl  font-serif w-full text-center'>OUR STORY
          </h2>
          </FadeInSection>  
        </div>  
          
          <FadeInSection delay={0.4}>
          <Image
          alt='‌‌img'
          src='/images/about/building.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto max-w-[820px] mt-10'
          />
          </FadeInSection>
  
          
        <FadeInSection delay={0}>
          <p className='max-w-[580px] mb-1 md:mb-5 mt-8 font-serif'>
            Established in April 2010, our coffee shop was envisioned as a premium destination to reflect the heart of the city, while offering guests a warm atmosphere and memorable coffee experiences.
          </p>
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <p className="text-[11px] text-gray-600 md:columns-2 gap-4 pb-10">
            Over the years, Harbourview Bistro has established itself as a destination of distinction. Celebrated for its refined interpretation of modern Australian cuisine, commitment to showcasing local produce, and breathtaking views of the city skyline.

            As it marks its 20th anniversary, Harbourview Bistro proudly reflects on two decades of culinary excellence and eagerly anticipates many more years as a cherished part of the dining landscape.
          </p>

          </FadeInSection>

        </div>
  )
}
