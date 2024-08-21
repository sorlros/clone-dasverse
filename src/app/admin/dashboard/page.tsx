"use client";

type Message = {
  id: string;
  content: string;
  createdAt: Date;
  userId: string;
  response: boolean;
};

type MessagesByUserId = Record<string, Message[]>;

import { createAdmin } from "@/app/actions/admin/create-admin";
import getUnrespondedMessages from "@/app/actions/admin/get-messages";
import AdminMessageModal from "@/components/modal/admin-message-modal";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [messages, setMessages] = useState<MessagesByUserId>({});
  const [adminId, setAdminId] = useState("");

  useEffect(() => {
    const identifyAdmin = async () => {
      const admin = await createAdmin("admin1234");
      if (admin) {
        setAdminId(admin.adminId);
      }
    }
    identifyAdmin();
  }, [])

  useEffect(() => {
    const fetchClientMessages = async () => {
      const messages = await getUnrespondedMessages();
      console.log("messages: ", messages);
      if (messages) {
        setMessages(messages);
      }
    }
    fetchClientMessages();
  }, [])

  return (
    <div className="w-full h-[100vh] flex flex-wrap bg-black p-4 gap-4">
      {Object.keys(messages).map((userId) => (
        <AdminMessageModal 
          key={userId} 
          userId={userId} 
          adminId={adminId}
          messages={messages[userId]} 
          small
        />
      ))}
    </div>
  )
}

export default Dashboard