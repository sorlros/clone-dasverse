"use client";

import { useEffect, useState } from "react";

const Content1 = () => {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (showText < 1 && currentScrollTop > 400) {
        setShowText(1);
      } else if (showText < 2 && currentScrollTop > 700) {
        setShowText(2);
      } else if (showText < 3 && currentScrollTop > 900) {
        setShowText(3);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [showText])

  return (
    <div className="flex flex-col w-full h-full p-60" id="about">
      <div className={`w-full h-[170px] transition-all duration-1000 items-center
        ${showText > 0
          ? "transform translate-y-[-100px] opacity-100"
          : "translate-y-0 opacity-0"}`}
      >
        <div className="text-5xl text-nowrap">
          <div>
            <span>다스버스가 </span>
            <span className="font-bold">만드는 세상은</span>
            <div className="font-bold mt-5">이렇습니다.</div>
          </div>
        </div>
      </div>

      <div className="w-full py-20">
        <div className="flex flex-col space-y-12 text-white text-ellipsis text-center items-center">
          <div className={`flex space-x-4 transition-all duration-1000
            ${showText > 1
              ? "transform translate-y-[-100px] opacity-100" 
              : "translate-y-0 opacity-0"
            }`}>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-SPACE</span>
                <p>디지털 트윈</p>
                <p>기획·구축</p>
            </div>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl text-nowrap">DAS-ARTWORK</span>
                <p>4K~16K</p>
                <p>디지털 아트</p>
            </div>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-FILM</span>
                <p>B2B 전문</p>
                <p>콘텐츠 제공</p>
            </div>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-ARTIST</span>
                <p>아트</p>
                <p>어워드·페스티벌</p>
                <p>아티스트 커뮤니티</p>
            </div>
          </div>

          <div className={`flex space-x-4 transition-all duration-1000
            ${showText > 2
              ? "transform translate-y-[-100px] opacity-100"
              : "translate-y-0 opacity-0"
            }`}>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-GROUND</span>
                <p>디지털 복합</p>
                <p>전시 공간</p>
            </div>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-LAB</span>
                <p>디지털 콘텐츠</p>
                <p>연구소</p>
            </div>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-TECH</span>
                <p>블록체인 기반</p>
                <p>콘텐츠 플랫봄 솔루션</p>
            </div>
            <div className="flex flex-col w-[225px] h-[200px] bg-black items-center justify-center">
              <span className="mb-5 font-bold text-xl">DAS-HUB</span>
                <p>디지털 아트</p>
                <p>허브</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content1