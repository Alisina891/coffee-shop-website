import Image from 'next/image';
import FadeInSection from '@/app/components/FadeInItem';

export default function story() {
  return (
    <div className='flex flex-col justify-center text-start justify-items-center text-black px-[15px]  max-w-[820px]'>
        <div>
          <FadeInSection delay={0.7}>
          <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-5xl  font-serif w-full text-center leading-[50px]'>ENVIRONMENTAL <br/> PRACTICE
          </h2>
          </FadeInSection>
          </div>
          <FadeInSection delay={0.8}>
          <Image
          alt='‌‌img'
          src='/images/about/kaho.jpg'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto max-w-[820px] mt-10'
          />
          </FadeInSection>

          <FadeInSection delay={0.3}>
          <p className='max-w-[580px] mb-1 md:mb-5 mt-8 font-serif'>
            
          The team at Harbourview Bistro is deeply dedicated to environmental stewardship, actively implementing thoughtful practices that support long-term sustainability and responsible operations.
          </p>
          </FadeInSection>
          <FadeInSection delay={0.5}>
          <p className="text-[11px] text-gray-600 md:columns-2 gap-4 pb-10">
            
            Committed to reducing our environmental footprint, we actively integrate sustainable practices across all aspects of our operations — from sourcing fresh, local, and organic produce to implementing thoughtful waste reduction strategies. Our approach ensures that every element of the business reflects a deep respect for the environment and the principles of sustainability.

          As passionate advocates of original and enduring design, Harbourview Bistro has proudly partnered with Cultivated since 2019 to renew and restore timeless furniture pieces throughout the venue. This collaboration underscores our dedication not only to sustainability, but also to craftsmanship, aesthetic integrity, and preserving the unique character of our space.
          </p>
          </FadeInSection>

        </div>
  )
}
