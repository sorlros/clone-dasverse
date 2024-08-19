"use client";

import { useMessage } from "@/app/hooks/use-message";
import { IoIosClose } from "react-icons/io";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { MdSend } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import sendMessage from "@/app/actions/customer/send-message";
import createUserId from "@/lib/create-userId";
import getMessageByUserId from "@/app/actions/admin/get-message-by-userId";
import getAdminMessageByUserId from "@/app/actions/admin/get-message-by-userId";

interface MessageProps {
  id: string;
  content: string;
  createdAt: Date;
  userId: string;
  response: boolean;
}

interface AdminMessageProps {
  id: string;
  content: string;
  createdAt: Date;
  adminId: string;
  messageId: string;
}

const MessageModal = () => {
  const { onClose } = useMessage();
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<(MessageProps | AdminMessageProps)[]>([]);
  const userId = localStorage.getItem("userId");
  
  const fetchMessages = useCallback(async () => {
    if (!userId) return;

    try {
      const adminMessages = (await getAdminMessageByUserId(userId)) || [];
      const userMessages = (await getMessageByUserId(userId)) || [];

      const allMessages = [...userMessages, ...adminMessages].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      // 중복된 메시지 필터링
      setMessages(allMessages);
    } catch (error) {
      console.error("fetchMessages 오류", error);
    }
  }, [userId]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const submitMessage = useCallback(async () => {
    try {
      if (content.trim() === "" || !userId) return;

      await sendMessage({ userId, content });
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), content, createdAt: new Date(), userId, response: false },
      ]);
    } catch (error) {
      console.error("submitMessage 오류", error);
    } finally {
      setContent("");
    }
  }, [content, userId]);

  const handleClickEnter = useCallback(() => {
    submitMessage();
  }, [submitMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClickEnter();
    }
  }, [handleClickEnter]);

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

        <div className="flex flex-col max-w-full h-[360px] py-2 px-6 bg-neutral-300 overflow-y-scroll">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                "adminId" in message ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  "adminId" in message ? "bg-gray-200" : "bg-black text-white"
                } max-w-[70%]`}
              >
                <span className="block text-xs w-full text-gray-500 text-center my-1">
                  {new Date(message.createdAt).toLocaleTimeString()}
                </span>
                <span className="block max-w-full text-center justify-center whitespace-normal break-words">
                  {message.content}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full h-[60px] bg-white rounded-b-3xl space-x-3 px-2 py-4 items-center">
          <Input 
            type="text" 
            placeholder="메세지를 입력하세요." 
            className="rounded-3xl focus:outline-none focus:ring-0" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
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
