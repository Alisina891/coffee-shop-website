import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./FadeInItem";import { usePathname } from "next/navigation";

export default function HoverDiv({ isOpen, setIsOpen}) {
  const pathname = usePathname();

 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [setIsOpen]); 


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // لیست آیتم‌های منو
  const navItems = [
    { key: 'home', label: 'Home', href: '/', icon: '/images/menu/hom1.png' },
    { key: 'about', label: 'About', href: '/about', icon: '/images/menu/about.png' },
    { key: 'menus', label: 'Menus', href: '/menu', icon: '/images/menu/menu.png' },
    { key: 'faqs', label: "FAQ'S", href: '/frequently-asked-question', icon: '/images/menu/question.png' },
    { key: 'gallery', label: 'Gallery', href: '/gallery', icon: '/images/menu/gallery.png' },
    { key: 'contact', label: 'Contact', href: '/contact-us', icon: '/images/menu/contact.png' },
  ];

  
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="block md:hidden">
      {isOpen && (
        <div className={`fixed top-0 left-0 inset-0 h-full w-full backdrop-blur-sm justify-items-start bg-opacity-80 shadow-lg z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-16 w-48 bg-stone-700 h-full">
            <div className="w-full ml-3 items-center">
              <div className="flex flex-col gap-4 w-32 py-4 mt-10 rounded">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return(
                  <FadeInSection key={item.key} delay={index * 0.1}>
                    <Link
                      href={item.href}
                      onClick={() => handleNavClick(item.key)}
                      className="flex gap-3 cursor-pointer"
                      aria-current={isActive === item.key ? 'page' : undefined}
                    >
                      <Image
                        alt="img"
                        src={item.icon}
                        width={20}
                        height={20}
                        className="ml-5 cursor-pointer w-[20px]"
                      />
                      <span className={`font-semibold rounded-full text-white hover:text-amber-700 transition-all duration-500 ${isActive && 'text-amber-600 underline underline-offset-4'}`}>
                        {item.label}
                      </span>
                    </Link>
                  </FadeInSection>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
