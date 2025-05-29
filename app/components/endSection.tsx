import FadeInSection from './FadeInItem';
import Image from 'next/image';


const newsSection = [{
        image: '/images/111.jpg',
        title: "Grand Opening of Aroma House Welcomed with Warm Smiles",
        description: "Aroma House officially opened its doors this week in the heart of the city, offering a cozy atmosphere and a carefully curated menu of handcrafted coffee and homemade pastries. The grand opening drew a crowd of..."
        
    },{
        image: '/images/222.jpg',
        title: "Live Music Nights Kick Off at Aroma House",
        description: "Aroma House is now hosting Live Music Fridays on the first Friday of every month, featuring local musicians in an intimate acoustic setting. The goal is to support emerging talent while giving customers a unique..."
    },{
        image: '/images/333.jpg',
        title: "New Mediterranean-Inspired Breakfast Menu Launches",
        description: "Starting this week, Aroma House introduces a refreshed breakfast menu inspired by Mediterranean flavors. Highlights include avocado toast with poached eggs, fluffy blueberry pancakes, and fresh herbal teas. “We wanted to offer something..."
    }];

export default function endSection() {

  return (
    <div className='flex  flex-col items-center
    justify-center  bg-stone-300 mt-8 md:mt-14 w-full'>     
        <FadeInSection delay={0}>
        <h3 className='text-gray-500 pt-10 tracking-wider text-sm '>WHAT&#39;S ON       
        </h3>
        </FadeInSection>

        <FadeInSection delay={0.2}>
        <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-[4vw]  font-serif'>NEWS
        </h2>
        </FadeInSection>

        <FadeInSection delay={0.8}>
        <p className='text-gray-700 text-sm  max-w-[300px] text-center tracking-wider mt-[2vw] md:mt-[1vw]'>
            Top Headlines, Events, and Stories           
        </p>
        </FadeInSection>

        <div className='max-md:flex-col  transition-all duration-500 flex justify-center items-start max-md:mt-8 mt-16 md:gap-[2vw] lg:gap-[2vw] px-5'>
           {newsSection.map((news, index) => (
            <div
                key={index}
                className="relative  flex flex-col justify-start text-start items-center w-full md:max-w-[220px] pr-2 mt-3 "
            >
                <div className="relative">
                <Image
                    src={news.image}
                    alt="news"
                    width={230}
                    loading='lazy'
                    height={200}
                    className="object-cover  w-[1200px] md:w-[230px] h-[290px] sm:h-[480px] md:h-[130px] transition-opacity duration-1000 hover:opacity-50"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-center text-amber-700 text-xl md:text-sm font-semibold uppercase opacity-0 transition-opacity duration-1000 hover:opacity-100 bg-black px-5 bg-opacity-70 ">
                    {news.title}
                </h3>
                </div>

                <h3 className="text-amber-700 mt-5 uppercase hover:underline-offset-4 hover:underline   w-full  text-start">{news.title}</h3>
                <p className="text-gray-600 text-sm mt-2 pb-9">{news.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
