"use client";

import { useEffect, useRef } from "react";

const Content2 = () => {
  const content2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollWebView = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 1500) {
        if (content2Ref.current) {
          const elementTop = content2Ref.current?.offsetTop;
          
            window.scrollTo({
              top: elementTop,
              behavior: "smooth"
            });
        }
      }
    }

    window.addEventListener("scroll", handleScrollWebView);

    return () => {
      window.removeEventListener("scroll", handleScrollWebView);
    }
  }, [])
  return (
    <div ref={content2Ref} className="flex relative flex-col w-full h-[240vh] bg-white">
      <div className="sticky top-0 left-0 w-[60%] h-1/2 mx-auto">
        <video 
          autoPlay
          loop
          muted
          className="w-full h-full object-none"
        >
          <source src="/videos/content-2-bg-video.mp4"/>
        </video>
      </div>

      <div className="sticky top-[50%] left-0 w-full h-1/2">
        <video 
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/videos/content-3-bg-video.mp4"/>
        </video>
      </div>      
    </div>
  )
}

export default Content2