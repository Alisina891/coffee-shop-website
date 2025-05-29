import Image from 'next/image';
import FadeInSection from '@/app/components/FadeInItem';

const images = [
  {
    src: '/images/about/worker.jpg',
    
  },{
    src: '/images/about/worker1.jpg'
  },{
    src: '/images/about/worker2.jpg'
  }
]
export default function story() {
  return (
    <div className='flex flex-col justify-center justify-items-center text-start  text-black px-[15px]  max-w-[820px]'> 
      <div> 
        <FadeInSection delay={0.7}>
          <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-5xl  font-serif w-full text-center'>
            OUR PEOPLE
          </h2>
        </FadeInSection>
        </div> 

        <FadeInSection delay={1}>
           <div className="columns-3 gap-2 w-full max-w-[800px] mt-10 mb-5 px-3">
                    {images.map((src, index) => (
                        <div key={index} className="break-inside-avoid mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={src.src}
                            alt={`photo${index + 1}`}
                            width={500}
                            loading='lazy'
                            height={500} 
                            className=" object-cover  max-h-[35vw] md:max-h-[30vw] lg:max-h-[300px] w-full h-auto transition-opacity duration-1000 hover:opacity-50 cursor-pointer"
                            priority={index < 3}
                        />
                        </div>
                    ))}
                    </div>
          </FadeInSection>

          <FadeInSection delay={0.3}> 
          <p className='max-w-[580px] mt-8 font-serif md:mb-5 mb-1'>
            
            It is the unity of purpose and unwavering dedication of the team at Harbourview Bistro, led by Managing Director, Alex Turner, that has firmly established it as one of the city’s most beloved and distinguished dining experiences.
          </p>
          </FadeInSection> 
          <FadeInSection delay={0.4}>
          <p className="text-[11px] text-gray-600  md:columns-2 mt-1 gap-14 pb-10">
            
            Liam’s unique blend of strategic vision, creativity, and deep industry insight has been the cornerstone of Harbourview Bistro’s continued success for more than two decades. As CEO, his leadership has shaped a culture of excellence and innovation across every aspect of the venue.<br/>
            
            Executive Chef Olivia Hart infuses the menu with modern sophistication, drawing on her international experience and passion for seasonality. Originally trained in Paris, Olivia refined her culinary style in prestigious kitchens throughout Europe before bringing her expertise to Australia. Her dedication to premium ingredients and artisan producers is reflected in every dish.<br/>
            

            Director of Operations, Daniel Nguyen, joined Harbourview Bistro in 2020, bringing with him a decade of high-end hospitality management. Known for his sharp eye for detail and commitment to team development, Daniel ensures every service runs flawlessly.<br/>

            Head Sommelier, Isabella Rossi, became part of the Harbourview team in 2023. With extensive experience across Italy and France in Michelin-starred venues, Isabella brings a depth of knowledge and a refined palate that continues to elevate the bistro’s acclaimed wine offering, maintaining its prestigious multi-glass rating.
          </p>
          </FadeInSection>

        </div>
  )
}
