"use server";

import { db } from "@/lib/prisma/db";

interface SendMessagesProps {
  userId: string;
  content: string;
}

const sendMessage = async ({userId, content}: SendMessagesProps) => {
  try {
    const createMessage = await db.message.create({
      data: {
        userId,
        content
      }
    })

    const groupedMessages = messages.reduce((acc, message) => {
      if (!acc[message.userId]) {
        acc[message.userId] = [];
      }
      acc[message.userId].push(message);
      return acc;
    }, {} as Record<string, typeof messages>);

    console.log("userId 별 유저메세지들 :", groupedMessages);
    return groupedMessages;
  } catch (error) {
    console.error("getUnrespondedMessages 오류:", error);
  }
}

export default sendMessage