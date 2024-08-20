"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const AdminDashboard = () => {
  const [password, setPassword] = useState(1234);

  return (
    <div className="flex w-full h-screen relative justify-center items-center">
      
      <div className="w-[200px] h-[70px] inset-0">
        <h1></h1>
        <Input
          type="password"  
          className="w-full h-[50px] focus:outline-black pl-3 border-1 border-black"
          placeholder="비밀번호를 입력하세요 (1234)"
        />
      </div>
    </div>
  )
}

export default AdminDashboard;