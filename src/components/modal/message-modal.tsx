"use client";

import { useMessage } from "@/app/hooks/use-message";
import { IoIosClose } from "react-icons/io";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { MdSend } from "react-icons/md";
import { useEffect, useState } from "react";
import sendMessage from "@/app/actions/customer/send-message";
import createUserId from "@/lib/create-userId";

interface SendMessagesProps {
  userId: string;
  content: string;
  createdAt: number;
}

const MessageModal = () => {
  const { onClose } = useMessage();
  const [content, setContent] = useState("");

  useEffect(() => {
    
  }, [])

  const submitMessage = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        await sendMessage({ userId, content })
      } else {
        console.log("userId가 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("submitMessage 오류", error);
    } finally {
      setContent("");
    }
  }

  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center rounded-3xl">
      <div className="flex flex-col w-[350px] h-[500px] rounded-3xl text-black relative">   
        <div className="flex flex-col w-full h-[80px] px-5 py-5 bg-white rounded-t-lg text-black">
          <h1 className="text-lg font-bold">DASVERSE</h1>
          <span className="text-sm font-normal ">최대한 신속하게 응답드리겠습니다.</span>
          <button
            className="flex absolute top-2 right-2 p-2 text-gray-500"
            onClick={onClose}
          >
            <IoIosClose size={24} />
          </button>
        </div>

        <div className="flex w-full h-[360px] py-2 px-6 bg-neutral-300">
          {}
        </div>

        <div className="flex w-full h-[60px] bg-white rounded-b-3xl space-x-3 px-2 py-4 items-center">
          <Input 
            type="text" 
            placeholder="메세지를 입력하세요." 
            className="rounded-3xl focus:outline-none focus:ring-0" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button type="button" className="rounded-2xl" onClick={submitMessage}>
            <MdSend size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
