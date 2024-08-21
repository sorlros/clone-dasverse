"use server";

import { db } from "@/lib/prisma/db";

const getUnrespondedMessages = async () => {
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

    // 응답되지 않은 메세지들을 userId로 그룹화
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