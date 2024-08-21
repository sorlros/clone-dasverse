"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [password, setPassword] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (password === 1234) {
      router.push("/admin/dashboard");
    }
  }, [password])
  

  return (
    <div className="flex w-full h-screen relative justify-center items-center">
      
      <div className="w-[200px] h-[70px] inset-0">
        <h1></h1>
        <Input
          type="password"  
          className="w-full h-[50px] focus:outline-black pl-3 border-1 border-black"
          placeholder="비밀번호를 입력하세요 (1234)"
          onChange={(e) => setPassword(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default AdminDashboard;