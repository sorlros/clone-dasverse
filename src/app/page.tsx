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
import MainPage from "./components/main-page";

export default function Home() {
  const messageModal = useMessage();

  useEffect(() => {
    const userId = createUserId();
    console.log("User ID:", userId);
  }, [])

  return (
    <main className="flex w-full min-h-screen flex-col items-center relative">
      <Header />
      <MainPage />
        
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
