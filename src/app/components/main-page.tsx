"use client";

import { Suspense, useEffect, useState } from "react"

const MainPage = () => {
  const [showText, setShowText] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setShowText(1);
    }, 1000)
  }, [showText])

  return (
    <Suspense>
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-[120vh]">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/videos/main-bg-video.mp4" />
          </video>
        </div>
      
        <div className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 z-10 text-white p-4 transition-all duration-1000
          ${showText > 0
            ? "transform translate-y-[-100px] opacity-100"
            : "translate-y-0 opacity-0"}`}
          >
          <div className="w-[620px] text-[60px] font-bold">
            <span>A door connecting</span>
            <br />
            <span className="mt-[-100px]">art, life and people</span>
          </div>
          <div className="w-[620px] mt-10 text-[22px] font-normal">
            <span>가상과 현실의 가치를 공유하는 </span>
            <span className="font-bold">디지털 아트 플랫폼 회사입니다.</span>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default MainPage