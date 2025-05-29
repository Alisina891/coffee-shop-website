"use client";

import { useState, useEffect } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // شروع شبیه‌سازی پیشرفت
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((old) => {
        // اگر به 90 درصد رسید، دیگر افزایش نده
        const next = old + Math.random() * 10;
        return next >= 90 ? 90 : next;
      });
    }, 300);

    // وقتی کامپوننت از DOM جدا می‌شود (بارگذاری تمام شد)، درصد را کامل کن
    return () => {
      clearInterval(interval);
      setProgress(100);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="w-64 h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${Math.floor(progress)}%` }}
        ></div>
      </div>
      <p className="mt-2 text-gray-700 text-sm">{Math.floor(progress)}%</p>
    </div>
  );
}
