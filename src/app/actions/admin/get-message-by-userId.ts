"use server";

import { db } from "@/lib/prisma/db";

const getAdminMessageByUserId = async (userId: string) => {
  try {
    const messages = await db.message.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: "asc"
      }
    })

    return messages;
  } catch (error) {
    console.error("getMessageByUserId 오류: ", error);
  }
}

export default getAdminMessageByUserId