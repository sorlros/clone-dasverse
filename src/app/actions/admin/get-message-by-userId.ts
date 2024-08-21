"use server";

import { db } from "@/lib/prisma/db";

const getAdminMessagesByUserId = async (userId: string) => {
  try {
    const messages = await db.adminMessage.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "asc"
      }
    })
    console.log("응답한 admin 메세지 호출 완료");
    return messages;
  } catch (error) {
    console.error("getMessageByUserId 오류: ", error);
  }
}

export default getAdminMessagesByUserId