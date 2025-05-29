'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoading(false);
    }, 500); // انیمیشن ۵۰۰ میلی‌ثانیه‌ای
  };

  return (
    <>
      <div className="max-md:flex flex-col md:columns-3 gap-2 w-full max-w-[800px] mt-10 mb-5 px-3 transition-all duration-500">
        {images.slice(0, visibleCount).map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-4 rounded-lg overflow-hidden animate-fade-in"
            onClick={() => setIndex(i)}
          >
            <Image
              src={src}
              alt={`photo${i + 1}`}
              width={500}
              height={500}
              className="object-cover md:max-h-[30vw] lg:max-h-[300px] w-full h-auto transition-opacity duration-1000 hover:opacity-50 cursor-pointer"
              priority={i < 3}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="text-center mb-10">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
};

export default Gallery;
