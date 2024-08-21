"use client";

import { IoIosClose } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { sendMessageToClient } from "@/app/actions/admin/create-message";

interface Message {
  id: string;
  content: string;
  createdAt: Date;
  userId: string;
  response: boolean;
  adminId?: string;
}

interface MessageModalProps {
  userId: string;
  adminId: string;
  messages: Message[];
  small?: boolean; // small 크기를 위한 prop 추가
}

const AdminMessageModal = ({ userId, adminId, messages, small }: MessageModalProps) => {
  const [content, setContent] = useState("");

  const submitMessage = async () => {
    console.log("userId: ", userId, "adminId: ", adminId, "content: ", content);
    try {
      await sendMessageToClient(adminId, userId, content);
    } catch (error) {
      console.log("submitMessage 오류: ", error);
    } finally {
      setContent("");
    }
  };

  return (
    <div
      className={`flex items-center justify-center rounded-3xl ${
        small ? "w-[250px] h-[400px]" : "w-[350px] h-[500px]"
      }`}
    >
      <div className="flex flex-col w-full h-full rounded-3xl text-black relative">
        <div className="flex flex-col w-full h-[80px] px-5 py-5 bg-white rounded-t-lg text-black">
          <h1 className="text-lg font-bold">User ID: {userId}</h1>
          <span className="text-sm font-normal">메세지를 입력하세요.</span>
          <button
            className="flex absolute top-2 right-2 p-2 text-gray-500"
          >
            <IoIosClose size={24} />
          </button>
        </div>

        <div className="flex flex-col max-w-full h-[calc(100%-140px)] py-2 px-6 bg-neutral-300 overflow-y-scroll">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                message.response ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  message.adminId ? "bg-gray-200" : "bg-black text-white"
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitMessage();
              }
            }}
          />
          <Button type="button" className="rounded-2xl" onClick={submitMessage}>
            <MdSend size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminMessageModal;
