'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import MenuDive from './menuButton/HoverDiv';
import FadeInSection from "./FadeInItemNav";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "FAQ'S", href: "/frequently-asked-question" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

 

const handleClick = useCallback(() => {
  setIsOpen(prev => !prev);
}, []);


  return (
    <>
      <MenuDive
        isOpen={isOpen}
        setIsOpen={setIsOpen}
         // دیگر نیازی به setActiveNav نداریم
      />

      <header className="fixed top-0 left-0 right-0 flex justify-between items-center w-full bg-stone-700 max-md:pl-[6vw] md:pl-[3vw] lg:pl-[2vw] py-4 z-50 max-w-screen-2xl mx-auto">
        
        {/* آیکن موبایل */}
        <button className="md:hidden" onClick={handleClick} aria-label="Open menu">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="x-icon"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <XMarkIcon className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="bars-icon"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Bars3Icon className="w-7 h-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* لوگو و لینک‌ها */}
        <nav className="hidden md:flex items-center">
          <Image
            src="/images/logo/2-2-2.jpg"
            alt="Logo"
            loading='lazy'
            width={70}
            height={70}
            className="rounded-full h-[70px] w-[70px] min-w-[70px] object-cover"
          />

          <div className="flex gap-3 ml-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <FadeInSection key={item.name} delay={index * 0.1}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[14px] font-semibold text-white transition-all duration-300 hover:text-amber-700 hover:underline  hover:underline-offset-4 ${
                      isActive  ? " underline underline-offset-4 text-amber-600" : ""
                    }`}
                    
                  >
                    {item.name}
                  </Link>
                </FadeInSection>
              );
            })}
          </div>
        </nav>

        {/* دکمه رزرو */}
        <Link href='/reservation'
          className=" flex  justify-center items-center max-md:mr-[6vw] md:mr-[4vw] lg:mr-[3vw] w-[160px] h-[25px] bg-gray-500 text-gray-200 text-xs
                   hover:bg-gray-300 hover:text-gray-700 hover:shadow-sm hover:shadow-gray-900
                   transition-colors duration-300"
        >
          MAKE A RESERVATION
        </Link>
      </header>
    </>
  );
}
