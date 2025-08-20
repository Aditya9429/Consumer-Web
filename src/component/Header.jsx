import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaBookmark, FaHeart, FaRegComment } from 'react-icons/fa';
import KeyModal from './KeyModal';

export default function Header() {

    const discussions = [
        {
            id: 1,
            user: "Anonymous",
            img: "/images/Dash2.png",
            time: "5 days ago",
            question: "Can Ayurveda help with stress and mental health issues?",
            answer:
                "Explore the potential benefits of traditional Ayurveda practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.",
            replies: 10,
            answers: [
                {
                    id: 1,
                    name: "Dr. Mathew Adams",
                    time: "5 days ago",
                    text: "Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
                    likes: 2,
                    comments: 2,
                    saves: 3,
                    avatar: "/images/Dash3.jpg"

                },
            ],
        },
        {
            id: 2,
            user: "Anonymous",
            time: "5 days ago",
            img: "/images/Dash2.png",
            question: "Can Ayurveda help with stress and mental health issues?",
            answer:
                "Explore the potential benefits of traditional Ayurveda practices in managing stress and improving mental well-being.",
            replies: "10",
            answers: [
                {
                    id: 2,
                    name: "Dr. Mathew Adams",
                    time: "5 days ago",
                    text: "Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
                    likes: 2,
                    comments: 2,
                    saves: 3,
                    avatar: "/images/Dash3.jpg"
                },
            ],
        },
    ];
    const [activetab, setActiveTab] = useState("questions");
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='w-full flex flex-col max-w-2xl mx-auto mt-10  mb-10 rounded-2xl shadow-md'>
            <div className='flex justify-evenly items-center border-b border-green-600 pb-3 mb-6 pt-4'>
                <div className='flex gap-10 text-2xl text-[#B8B8B8]'>
                    <button onClick={() => setActiveTab("questions")} className={` ${activetab == "questions" ? "border-b-2 text-green-600 border-green-600" : ""}`}>Questions </button>
                    <button onClick={() => setActiveTab("thoughts")} className={` ${activetab == "thoughts" ? "border-b-2  text-green-600 border-green-600" : ""}`}> Thoughts</button>
                </div>

            </div>
            <div className='flex justify-between  items-center p-6'>
                <div className='flex items-center gap-2'>
                    <img src="/images/Dash.png " className='w-[50px] object-cover rounded-full' />
                    <p>Priya Singh </p>
                </div>
                <button className='py-2 px-4 text-white text-sm bg-green-600 rounded-[8px]' onClick={() =>  setIsModalOpen(true)}>Ask a question</button>
            </div> 
            <KeyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <hr className='text-gray-300 border-1' />
            {
                activetab == "questions" &&
                discussions.map((item) => (
                    <div key={item.id} className='p-5'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <img src={item.img} className='w-12 h-12 rounded-full object-cover border ' />
                                    <div className=''>
                                        <p className='text-lg font-normal text-[#1E1E1E] leading-[20px] mb-1'>{item.user}</p>
                                        <p className='text-sm font-semibold  text-[#8D8D8D]'>{item.time}</p>
                                    </div>
                                </div>
                                <span><BsThreeDotsVertical /></span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base font-medium text-[#000000]'>{item.question}</p>
                                <p className='text-sm font-normal text-[#1F1F1F] leading-[24px]'>{item.answer}</p>
                            </div>
                            <div className='flex justify-between text-sm font-semibold text-[#8D8D8D]'>
                                <p>Replies • {item.replies} reply</p>
                                <button className='text-green-400'>
                                    View all 9 replies
                                </button>
                            </div>
                        </div>
                        {
                            item.answers.map((ans) => (
                                <div key={ans.id} className='flex flex-col gap-3 bg-[#F3FAF1] text-black rounded-lg p-4 mb-4 mt-10 ml-4'>
                                    <div className='flex justify-between items-start '>
                                        <div className='flex items-center gap-2'>
                                            <img src={ans.avatar} className='w-12 h-12 rounded-full object-cover' />
                                            <div>
                                                <p className='text-lg font-normal text-[#1E1E1E] leading-[20px] mb-1'>{ans.name}</p>
                                                <p className='text-sm font-semibold  text-[#8D8D8D]'>{item.time}</p>
                                            </div>
                                        </div>
                                        <span><BsThreeDotsVertical /></span>
                                    </div>
                                    <div>
                                        <p className='text-sm font-normal text-[#000000] leading-[24px]'>{ans.text}</p>
                                    </div>
                                    <div className="flex gap-6 mt-3 text-gray-600 text-sm">
                                        <span className="flex items-center gap-1 text-green-600">
                                            <FaHeart /> {ans.likes}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaRegComment /> {ans.comments}
                                        </span>
                                    </div>


                                </div>
                            ))
                        }
                        <div className="flex  items-center justify-center gap-6 text-gray-400 text-sm mt-2">
                            <span className="flex items-center gap-1">
                                <FaHeart /> 23 Likes
                            </span>
                            <span className="flex items-center gap-1">
                                <FaRegComment /> {item.replies} Reply
                            </span>
                            <span className="flex items-center gap-1">
                                <FaBookmark /> 3 Saves
                            </span>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
