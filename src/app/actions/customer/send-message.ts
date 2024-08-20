"use server";

import { db } from "@/lib/prisma/db";

interface SendMessagesProps {
  userId: string;
  content: string;
}

const sendMessage = async ({userId, content}: SendMessagesProps) => {
  try {
    const message = await db.message.create({
      data: {
        userId,
        content
      }
    })

    console.log("sendMessage 생성: ", message);
  } catch (error) {
    console.error("sendMessage 오류: ", error);
  }
}

export default sendMessage