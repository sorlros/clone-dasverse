"use server";

import { db } from "@/lib/prisma/db";

export const createAdmin = async (adminId: string) => {
  try {
    const existingAdmin = await db.admin.findUnique({
      where: { adminId },
    });

    if (existingAdmin) {
      return existingAdmin;
    }

    const admin = await db.admin.create({
      data: {
        adminId,
      },
    });

    console.log("Admin 생성이 완료되었습니다: ", admin);
    return admin;
  } catch (error) {
    console.error("Admin 생성 오류: ", error);
    throw error;
  }
};
