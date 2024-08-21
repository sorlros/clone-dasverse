"use server";

import { db } from "@/lib/prisma/db";

export const sendMessageToClient = async (
  adminId: string,
  userId: string,
  content: string,
) => {
  try {
    const adminMessage = await db.adminMessage.create({
      data: {
        adminId,
        userId,
        content
      }
    });

    // 해당 클라이언트 메시지의 응답 상태를 true로 업데이트
    await db.message.updateMany({
      where: { 
        userId,
        response: false
      },
      data: { 
        response: true 
      },
    });

    console.log("client에게 메세지 전송 성공: ", adminMessage);
  } catch (error) {
    console.error("sendMessageToClient 오류: ", error);
    throw error;
  }
};
