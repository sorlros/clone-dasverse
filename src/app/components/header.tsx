"use client";

import { Button } from "@/components/ui/button";
import { Open_Sans } from "next/font/google";
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const openSans = Open_Sans({ subsets: ['latin'] })

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      // console.log("ASDASD", currentScrollTop)
      
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
    <div className={`flex w-full h-[100px] justify-center items-center bg-black bg-opacity-80 border-b-[1px]  fixed top-0 transition-transform duration-700 z-[9999]
    ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >  
      <ul className={`${openSans.className} flex w-[1069px] h-full mx-auto items-center gap-x-4 text-white text-[14px]`}>
        <ScrollLink to="about" smooth={true} duration={500}>ABOUT</ScrollLink>
        <ScrollLink to="dasverse" smooth={true} duration={500}>DASVERSE</ScrollLink>
        <ScrollLink to="dailyartstory" smooth={true} duration={500}>DAILY ART STORY</ScrollLink>
        <ScrollLink to="artcomplex" smooth={true} duration={500}>ART COMPLEX</ScrollLink>
        <Link href="/">NEW</Link>
        <Link href="/">CONTACT</Link>
        
        <button className="flex w-[85px] rounded-2xl outline-1 outline-white bg-transparent justify-end">
          KO <IoIosArrowDown size={18}/>
        </button>
      </ul>
    </div>
  )
}

export default Header


