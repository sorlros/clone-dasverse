"use server";

import { db } from "@/lib/prisma/db";

interface GetMessagesProps {
  userId: string;
  content: string;
  createdAt: Date;
  response: boolean;
}

const getUnrespondedMessages = async ({userId, content, createdAt, response}: GetMessagesProps) => {
  try {
    const messages = await db.message.findMany({
      where: {
        response: false
      },
      orderBy: [
        {
          createdAt: "asc"
        }
      ]
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

export default getUnrespondedMessages