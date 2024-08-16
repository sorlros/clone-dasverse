"use client";

import { v4 as uuidv4 } from 'uuid';

const createUserId = () => {
  let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("userId", userId);
    }

  return userId;
}

export default createUserId