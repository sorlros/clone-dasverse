"use client";

import Header from "@/app/components/header";
import { Suspense, useEffect } from "react";
import ReactPlayer from "react-player";
import Content1 from "@/app/components/content-1";
import Content2 from "@/app/components/content-2";
import createUserId from "@/lib/create-userId";
import { AiOutlineMessage } from "react-icons/ai";
import { useMessage } from "./hooks/use-message";
import MessageModal from "@/components/modal/message-modal";

export default function Home() {
  const messageModal = useMessage();

  useEffect(() => {
    const userId = createUserId();
    console.log("User ID:", userId);
  }, [])

  return (
    <main className="flex w-full min-h-screen flex-col items-center relative">
      <Header />
        <Suspense>
          <div className="absolute inset-0 z-[-1]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mkggXE5e2yk"
              playing
              loop
              muted
              width="100%"
              height="120%"
              className="react-player"
            />
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 z-10 text-white p-4">
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

      <div className="absolute w-full h-[120vh] bg-white top-[120vh]">
        <Content1 />
      </div>
      <div className="absolute w-full h-[360vh] bg-black top-[240vh]">
        <Content2 />
      </div>

      <div className="w-[64px] h-[64px] flex rounded-full bg-black text-white fixed bottom-10 right-5 items-center justify-center cursor-pointer">
        <AiOutlineMessage size={37} onClick={messageModal.onOpen} />
      </div>

      {messageModal.isOpen && <MessageModal />}
    </main>
  );
}
