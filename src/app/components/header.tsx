"use client";

import { Button } from "@/components/ui/button";
import { Open_Sans } from "next/font/google";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const openSans = Open_Sans({ subsets: ['latin'] })

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      console.log("current", currentScrollTop)
      if (currentScrollTop > lastScrollTop.current + 15) {
        setShowHeader(false);
      } else if (currentScrollTop < lastScrollTop.current - 15) {
        setShowHeader(true);
      }

      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={`flex w-full h-[100px] justify-center items-center bg-black bg-opacity-50 border-b-[1px] border-white fixed top-0
    ${showHeader ? "block transition-transform duration-900" : "hidden transition-transform duration-900"}`}
    >  
      <ul className={`${openSans.className} flex w-[1069px] h-full mx-auto items-center gap-x-4 text-white text-[14px]`}>
        <Link href="/about">ABOUT</Link>
        <Link href="/dasverse">DASVERSE</Link>
        <Link href="/dailyartstory">DAILY ART STORY</Link>
        <Link href="/artcomplex">ART COMPLEX</Link>
        <Link href="/new">NEW</Link>
        <Link href="/contact">CONTACT</Link>
        
        <button className="flex w-[85px] rounded-2xl outline-1 outline-white bg-transparent justify-end">
          KO <IoIosArrowDown size={18}/>
        </button>
      </ul>
    </div>
  )
}

export default Header


