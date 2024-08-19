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
  } catch (error) {
    
  }
}

export default sendMessage