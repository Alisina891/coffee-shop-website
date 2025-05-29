'use client'

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "What's On", href: "/whats-on" }, // اصلاح تایپو: whats-on
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");

  return  (
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center w-full bg-stone-700 max-md:pl-[6vw] md:pl-[3vw] lg:pl-[2vw] py-4  z-50 max-w-screen-2xl mx-auto">
      {/* Menu icon for mobile */}
      <button className="md:hidden" aria-label="Open menu">
        <Image
          src="/images/menu-icon.png"
          alt="Menu Icon"
          width={25}
          height={25}
          className="h-[25px] w-[25px] min-w-[25px]"
        />
      </button>

      {/* Logo and navigation links (hidden on mobile) */}
      <nav className="hidden md:flex items-center">
        <Image
          src="/images/logo/logo.jpg"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full h-[70px] w-[70px] min-w-[70px] object-cover"
        />
        <div className="flex gap-3 ml-8">
          {navItems.map((item) => (
             <Link
              key={item.name}
              href={item.href}  // فرض کنیم هر آیتم یک فیلد href دارد مثل "/about"
              aria-current={activeNav === item.name ? "page" : undefined}
              className={`text-[14px] font-thin text-white transition-all duration-300 hover:text-amber-700 ${
                activeNav === item.name ? "underline underline-offset-4" : ""
              }`}
              onClick={() => setActiveNav(item.name)}  // اگر می‌خواهی استیت هم آپدیت شود
            > {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Reservation button */}
      <button
        className="max-md:mr-[6vw] md:mr-[4vw] lg:mr-[3vw] w-[160px] h-[25px] bg-gray-500 text-gray-200 text-xs
                   hover:bg-gray-300 hover:text-gray-700 hover:shadow-sm hover:shadow-gray-900
                   transition-colors duration-300"
      >
        MAKE A RESERVATION
      </button>
    </header>
  );
}
