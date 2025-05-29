import StorySection from './components/story';
import PeopleSection from './components/people';
import CultuSection  from './components/cultural';
import DesignSection from './components/design';
import KahoSection from './components/kaho';

export default function page() {
  return (
    <main className=' flex justify-center items-center bg-stone-700  px-3 md:px-5 lg:px-6 '>
      <div className='flex flex-col max-w-screen-2xl   pt-[110px] bg-stone-300 justify-center items-center  lg:px-48 px-3'>
        <StorySection />
        <PeopleSection />
        <CultuSection />
        <DesignSection />
        <KahoSection />
      </div>
    </main>
  )
}
