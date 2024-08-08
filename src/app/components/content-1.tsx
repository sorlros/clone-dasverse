"use client";

import { useEffect, useState } from "react";

const Content1 = () => {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > 400) {
        setShowText(1);
      } else {
        if (currentScrollTop > 700) {
          setShowText(2);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className="flex flex-col w-full h-full p-60">
      <div className={`w-full h-[170px] transition-transform duration-700 items-center
        ${showText === 1 
          ? "transform translate-y-[-100px] opacity-100"
          : "mt-50 opacity-0"}`}
      >
        <div className="text-5xl text-nowrap">
          <p>
            <span>다스버스가 </span>
            <span className="font-bold">만드는 세상은</span>
            <p className="font-bold mt-5">이렇습니다.</p>
          </p>
        </div>  
      </div>

      <div className="w-full py-20">
        <div className="flex flex-col space-y-4 text-white text-ellipsis text-center items-center">
          <div className="flex space-x-4">
            <div className="w-[225px] h-[200px] bg-black">
              DAS-SPACE
            </div>
            <div className="w-[225px] h-[200px] bg-black">
              DAS-ARTWORK
            </div>
            <div className="w-[225px] h-[200px] bg-black">
              DAS-FILM
            </div>
            <div className="w-[225px] h-[200px] bg-black">
              DAS-ARTIST
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-[225px] h-[200px] bg-black">
              DAS-GROUND
            </div>
            <div className="w-[225px] h-[200px] bg-black">
              DAS-LAB
            </div>
            <div className="w-[225px] h-[200px] bg-black">
              DAS-TECH
            </div>
            <div className="w-[225px] h-[200px] bg-black">
              DAS-HUB
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content1