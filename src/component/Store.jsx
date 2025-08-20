import React from 'react'
import './Store.css'
import { BsCart } from "react-icons/bs";

export default function Store() {
    return (
        <div>
            <img src="/images/Store.png" className='relative w-full h-[150px] object-cover' />
            <div className='absolute top-[10%] left-[23%] lg:top-[24%] lg:left-[36%] flex flex-col items-center gap-8'>
                <h1 className='text-2xl lg:text-4xl font-bold text-[#333448]'>Store</h1>
                <div className='flex items-center gap-5'>
                    <input type="text" placeholder='Search for Kuntal Care' className='w-[250px] lg:w-[400px]  bg-white py-2 px-2 border-none outline-none  rounded-[10px] text-base font-normal text-[#484948]' />
                    <span className='bg-white rounded-full p-3'><BsCart /></span>
                </div>
            </div>

        </div>
    )
}
