import React from 'react'
import { FaBeer, FaHome } from 'react-icons/fa'
import { IoMdCall } from "react-icons/io";
export default function TopNav() {
  return (
<div className="w-full hidden lg:flex items-center justify-center px-6 py-3 gap-4 bg-black">

   
        <h1 className='text-xl font-medium text-[#D9D9D9]'>Your first 5 minutes instant call is freer</h1>
      
      <span className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2 rounded-[10px] shadow-md transition-all duration-300">
        <IoMdCall />
      
      <p className='text-sm'>Try instant Free Call Now</p>
      </span>
    
    </div>
  )
}
