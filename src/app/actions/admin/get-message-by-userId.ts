"use server";

import { db } from "@/lib/prisma/db";

const getAdminMessagesByUserId = async (userId: string) => {
  try {
    const messages = await db.adminMessage.findMany({
      where: {
        clientMessage: {
          userId,
          response: true
        }
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

export default getAdminMessagesByUserId