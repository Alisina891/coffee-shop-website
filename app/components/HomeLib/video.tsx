"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!showVideo) {
      const timeout = setTimeout(() => {
        setShowVideo(true); // دوباره نمایش ویدیو بعد از fade out
      }, 500); // مدت تا شروع دوباره

      return () => clearTimeout(timeout);
    }
  }, [showVideo]);

  const handleVideoEnd = () => {
    setShowVideo(false); 
  };

  return (
    <div className="w-full">
      <AnimatePresence>
        {showVideo && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full aspect-video"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              src="/video/3.mp4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
