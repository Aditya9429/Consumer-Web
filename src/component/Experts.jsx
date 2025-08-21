import React from 'react'
import { SlGraduation } from "react-icons/sl";
import { FaLink } from "react-icons/fa6";

export default function Experts() {
    const data = [
        {
            id: 1,
            img: "/images/Expert.png",
            rating: "4.5",
            name: "Dr. Vaishali Sharma",
            qualification: "Ayurveda Practitioner (BAMS, MD)",
            experience: "25 years of experience",
            specialist: "Skin Specialist",
            session: "Book a session"
        },
        {
            id: 2,
            img: "/images/Expert.png",
            rating: "4.5",
            name: "Dr. Ramesh Gupta",
            qualification: "Ayurveda Practitioner (BAMS, MD)",
            experience: "18 years of experience",
            specialist: "Hair Specialist",
            session: "Book a session"
        },
        {
            id: 3,
            img: "/images/Expert.png",
            rating: "4.7",
            name: "Dr. Sunita Mehra",
            qualification: "Ayurveda Practitioner (BAMS, MD)",
            experience: "20 years of experience",
            specialist: "Digestive Care",
            session: "Book a session"
        },
    ];

    return (
        <div className="flex flex-col items-center gap-10 mb-10 mt-10">
            <h1 className="text-4xl font-semibold">Meet Our Experts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <div key={item.id} className=" shadow-sm rounded-3xl overflow-hidden flex flex-col items-center p-6 w-[280px]">
                        
                        <div className="relative">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-[120px] h-[120px] rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 bg-black text-white px-2 py-1 rounded-xl flex items-center gap-1 text-sm font-medium">
                                <span>{item.rating}</span>
                                <span className="text-yellow-400">★</span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="mt-6 flex flex-col items-center text-center gap-2">
                            <p className="text-lg font-bold">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.qualification}</p>

                            <div className="flex items-center gap-2 text-sm text-gray-800">
                                <SlGraduation className="text-green-700" />
                                <p>{item.experience}</p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-green-800 py-1 px-3 bg-green-100 rounded-full">
                                <FaLink />
                                <p>{item.specialist}</p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="mt-5 w-full bg-green-900 text-white py-2 rounded-b-2xl font-medium">
                            {item.session}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
