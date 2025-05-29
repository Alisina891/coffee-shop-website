import HomeSection from './components/HomeSection';
import EndSection from './components/endSection';
import GallerySection from './components/gallerySection';
export default function Home() {
  return (
  <main className=" flex min-h-screen flex-col items-center bg-stone-700 ">
      <div className=" flex flex-col items-center justify-start max-w-screen-2xl bg-stone-700  px-2 md:px-7 ">
        <HomeSection />
        <EndSection />
        <GallerySection />
      </div>

  </main>
  );
}
