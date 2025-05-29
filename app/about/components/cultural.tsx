import Image from 'next/image';
import FadeInSection from '@/app/components/FadeInItem';

export default function story() {
  return (
    <div className='flex flex-col justify-center text-start  text-black px-[15px]  max-w-[820px] justify-items-center'>
         <div>
          <FadeInSection delay={0.6}>
          <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-5xl  font-serif w-full text-center'>CULTURAL PARTNERS
          </h2>
          </FadeInSection>
          </div>

          <FadeInSection delay={0.7}>

          <Image
          alt='‌‌img'
          src='/images/about/cur.jpg'
          width={0}
          loading='lazy'
          height={0}
          sizes='100vw'
          className='w-full h-auto max-w-[820px] mt-10'
          />
          </FadeInSection>

          <FadeInSection delay={0.2}>
          <p className='max-w-[580px] mb-1 md:mb-5 mt-8 font-serif'>
            
          At the heart of every thriving city lies its creative spirit; for Melbourne, its dynamic blend of music, art, and design shapes the soul of its urban identity.
          </p>
          </FadeInSection>
          <FadeInSection delay={0.5}>
          <p className="text-[11px] text-gray-600 md:columns-2 gap-4 pb-10">
            
          As proud and long-standing advocates of our city&#39;s cultural scene, we are honoured to collaborate with some of its most esteemed institutions — including the Grand Theatre, the Contemporary Art Museum, the International Film Showcase, and the Annual City Festival.

          Together, these partnerships help shape the cultural heartbeat of our community, fostering a legacy of innovation, inclusivity, and unforgettable experiences for all.


          </p>

          </FadeInSection>

        </div>
  )
}
