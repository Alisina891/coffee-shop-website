import FadeInSection from './FadeInItem';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];



export default function GallerySection() {

  return (
    <div className='flex flex-col items-center
    justify-center  bg-stone-700  md:mt-6'>     
        <FadeInSection delay={0}>
        <h3 className='text-gray-300 pt-10 tracking-wider text-sm'>
            EXPERIENCE       
        </h3>
        </FadeInSection>

        <FadeInSection delay={0.2}>
        <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-[4vw]  font-serif'>THE GALLERY
        </h2>
        </FadeInSection>

        <FadeInSection delay={0.8}>
        <p className='text-gray-300 text-sm  max-w-[300px] text-center tracking-wider mt-[2vw] md:mt-[2vw]'>
            HOME COFFEES           
        </p>
        </FadeInSection>
          <div className="columns-3 gap-2 w-full max-w-[800px] mt-10 mb-5 px-3">
            {images.map((src, index) => (
                <div key={index} className="break-inside-avoid mb-4 rounded-lg overflow-hidden">
                  <Link href='/gallery'>
                    <Image
                        src={src}
                        alt={`photo${index + 1}`}
                        width={500}
                        height={500} 
                        className=" object-cover  max-h-[35vw] md:max-h-[30vw] lg:max-h-[300px] w-full h-auto transition-opacity duration-1000 hover:opacity-50 cursor-pointer"
                        priority={index < 3}
                    />
                    </Link>
                </div>
            ))}
           </div>

        <FadeInSection delay={0.2}>
         <Link href='/gallery' className=" flex  justify-center items-center text-amber-700   mb-10 px-3 border-b border-amber-700 w-[200px] h-7  rounded hover:text-gray-600 hover:border-gray-600 transition-all duration-700 text-sm ">VIEW GALLERY
         </Link>
        </FadeInSection>
    </div>
  )
}
