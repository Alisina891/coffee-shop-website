import Image from 'next/image';
import FadeInSection from '@/app/components/FadeInItem';

const images = [
  {
    src: '/images/about/place4.jpg',
    
  },{
    src: '/images/about/place1.jpg'
  },{
    src: '/images/about/place2.jpg'
  }
]
export default function story() {
  return (
    <div className='flex flex-col justify-center text-start justify-items-center text-black px-[15px]  max-w-[820px]'>
       <div>
        <FadeInSection delay={0.7}>
          <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-5xl  font-serif w-full text-center leading-[50px]'>
            DESIGN 
            <br/>COLLABORATIONS
          </h2>
          </FadeInSection>
          </div>

          <FadeInSection delay={0.8}>
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
            
            
          Bathed in natural light, warm oak finishes, elegant metal accents, and expansive floor-to-ceiling windows frame Harbourview Bistro’s stunning panorama of the city skyline. The original interior, envisioned in 2001 by acclaimed Tokyo-based designer Kenji Nakamura, offers a seamless balance between contemporary sophistication and the site’s historical charm.
          </p>
          </FadeInSection>
           <FadeInSection delay={0.5}>
          <p className="text-[11px] text-gray-600  md:columns-2 mt-1 gap-14 pb-10">
             
          Sustainably sourced recycled blackbutt timber flooring, salvaged from historic Sydney structures, anchors the space with authenticity and character. The main dining area is adorned with a striking series of commissioned artworks — including evocative Harbour Bridge paintings by Angus McDonald and a captivating photographic collection by the late David Moore.<br/>
            
            
            The Lounge offers a refined counterpoint to the restaurant’s main space — a harmonious blend of classic elegance and modern minimalism. Rich, earthy tones and organic textures infuse warmth, while a dramatic mirrored feature wall by acclaimed light artist Bruce Ramus shifts with colour, light, and movement, offering an ever-changing visual experience.<br/>
            

             
            In 2019, the acclaimed design studio Collins and Turner reimagined the private dining room and cocktail bar. Their vision pays homage to the timeless DNA of John Morford’s original 1999 design, while layering in new warmth, material richness, and thoughtful spatial flow — culminating in an intimate room that frames a breathtaking view of Sydney Harbour.
          </p>
          </FadeInSection>

        </div>
  )
}
