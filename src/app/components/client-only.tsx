"use client";

import { useState, useEffect } from 'react'
 
const ClientOnly = ({children}: {children: React.ReactNode}) => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isClient) {
    return null;
  }
  
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientOnly