import React from 'react'
import { SlGraduation } from "react-icons/sl";
import { FaLink } from "react-icons/fa6";
export default function Experts() {
    const data = [
        {
            id: 1,
            img: "/images/Expert.png",
            rating: "4.5",
            name: "Dr .Vaishali Sharma",
            qualification: "Ayurveda Practitioner (BAMS,MD)",
            experience: "25 years of experience",
            specialist: "Skin Specialist",
            session: "Book a session"
        },
        {
            id: 2,
            img: "/images/Expert.png",
            rating: "4.5",
            name: "Dr .Vaishali Sharma",
            qualification: "Ayurveda Practitioner (BAMS,MD)",
            experience: "25 years of experience",
            specialist: "Skin Specialist",
            session: "Book a session"
        },
        {
            id: 1,
            img: "/images/Expert.png",
            rating: "4.5",
            name: "Dr .Vaishali Sharma",
            qualification: "Ayurveda Practitioner (BAMS,MD)",
            experience: "25 years of experience",
            specialist: "Skin Specialist",
            session: "Book a session"
        },
    ]
    return (
        <div className='flex flex-col items-center gap-10 mb-10'>
            <h1>Meet Our Experts</h1>
            <div className=' flex'>
                {
                    data.map((item, index) => (
                        <div key={index} className='w-full relative flex flex-col items-center gap-2 bg-pink-200 ml-4 p-5 rounded-2xl'>
                            <img src={item.img} className=' w-full rounded-[50%] object-cover' />
                            <div className='absolute top-[45%] left-[42%] flex items-center gap-2 bg-black text-white px-2 rounded-2xl'>
                                <p>{item.rating}</p>
                                <span className="text-yellow-400 text-sm">★</span>

                            </div>
                            <p className='text-base font-extrabold'>{item.name}</p>
                            <p className='text-base text-[#838383] font-medium'>{item.qualification}</p>
                            <div className='flex items-center gap-2'>
                                <span><SlGraduation /></span>
                                <p className='text-[#0C0C0C] text-base font-normal'>{item.experience}</p>
                            </div>
                            <div className='flex items-center gap-2 text-[#3A643B] py-1 px-2 bg-[#bccfbc] rounded-2xl'>
                                <span><FaLink /></span>
                                <p>{item.specialist}</p>
                            </div>
                        
                             
                        </div>
                    ))
                }
                  
            </div>
        </div>
    )
}
