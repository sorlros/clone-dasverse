"use client";

import { useLayoutEffect, useRef, useState } from "react";
import VideoSection from '@/app/components/sections/video-section';

const Content2 = () => {
  const content2Ref = useRef<HTMLDivElement>(null);
  const [hasPassed, setHasPassed] = useState(false);
  const [width, setWidth] = useState("60%");

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 1500) {
        if (content2Ref.current && !hasPassed) {
          const rect = content2Ref.current.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          document.body.style.overflow = "hidden";

          window.scrollTo({
            top: elementTop,
            behavior: "smooth",
          });

          setHasPassed(true);

          setTimeout(() => {
            setWidth("100%");
            document.body.style.overflow = "";
          }, 1000);
        }
      } else {
        setHasPassed(false);
        setWidth("60%");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasPassed]);

  return (
    <div ref={content2Ref} className={`flex flex-col w-full h-full bg-white`}
      style={{
        backgroundColor: hasPassed ? "black" : "white",
        transition: "background-color 1.7s ease-in-out",
      }}
    >
      <div 
        className="relative w-[60%] h-[120vh] mx-auto transition-all duration-700"
        style={{
          width: width,
        }}
        id="dasverse"
      >
        <VideoSection 
          videoNumber={1}
          title="SERVICE 01"
          subtitle="DASVERSE"
          content="전세계 최초 LG OLED TV 프리미엄 아트 메타버스 미술관"
          textColor="white"
          buttonColor="white"
          buttonTextColor="white"
        />
      </div>

      <div className="relative w-full h-[120vh]" id="dailyartstory">
        <VideoSection 
          videoNumber={2}
          title="SERVICE 02"
          subtitle="DAILY ART STORY"
          content="아트 OTT 스트리밍 서비스"
          textColor="neutral-800"
          buttonColor="neutral-800"
          buttonTextColor="text-neutral-800"
        />
      </div>

      <div className="relative w-full h-[120vh]" id="artcomplex">
        <VideoSection 
          videoNumber={3}
          title="SERVICE 03"
          subtitle="ART COMPLEX"
          content="새로운 형태의 복합 문화공간"
          textColor="white"
          buttonColor="white"
          buttonTextColor="white"
        />
      </div>      
    </div>
  )
}

export default Content2;
