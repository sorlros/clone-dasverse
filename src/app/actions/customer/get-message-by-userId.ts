"use server";

import { db } from "@/lib/prisma/db";

const getClientMessagesByUserId = async (userId: string) => {
  try {
    const messages = await db.message.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "asc"
      }
    })

    return messages;
  } catch (error) {
    console.error("getClientMessagesByUserId 오류: ", error);
  }
}

export default getClientMessagesByUserId;