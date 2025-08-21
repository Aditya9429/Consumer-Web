import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='w-full bg-[#DBE3DC]'>
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5  p-5 lg:p-10  max-w-[5xl] '>
                <div className='flex flex-col items-start gap-5'>
                    <h1 className='text-[#0e623b] font-semibold'>Get in Touch</h1>
                    <div className='flex flex-col gap-3'>
                        <a href=''>tyu@gmail.com</a>
                        <p className='max-w-[300px]'>Amrutam Pharmaceuticals Pvt Ltd. chitragupt ganj Nai Sadak Lashkar Gwalior - 474001</p>
                        <p>9713171999</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <a href='' className='rounded-full p-4 text-white bg-[#0e623b] '><FaFacebookF /></a>
                        <a href='' className='rounded-full p-4 text-white bg-[#0e623b]'><FaTwitter /></a>
                        <a href='' className='rounded-full p-4 text-white bg-[#0e623b]'><FaInstagram /></a>
                        <a href='' className='rounded-full p-4 text-white bg-[#0e623b]'><FaLinkedinIn /></a>
                        <a href='' className='rounded-full p-4 text-white bg-[#0e623b]'><FaYoutube /></a>
                    </div>
                </div>
                <div className='flex flex-col gap'>
                    <h1 className='text-[#0e623b] mb-3 font-semibold'>Information</h1>
                    
                    <p>About Us</p>
                    <p>Term & condition</p>
                    <p>Privacy Policy</p>
                    <p>Privacy Policy for Mobile Apps</p>
                    <p>Shipping , return and cancellation Policy International Delivey </p>
                    <p>For Businesses,Hotels and Restors</p>
                </div>
                <div className='flex flex-col gap-4 '>
                    <h1 className='font-semibold max-w-[300px] text-[#0e623b]'>Subscribe to our Newsletter and join Amrutam Family today!</h1>
                    <div className='w-[300px] flex'>
                        <input type='text' placeholder='Your Email Address' className='w-full max-w-[400px] rounded-l-3xl p-4 border border-black' />
                        <button className='bg-black text-white p-4 rounded-r-3xl'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
