import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Medical } from '../context/Medical';
import { GrFormSubtract } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import Highlights from './Highlights';
import Usage from './Usage';
import { IoPlayOutline } from "react-icons/io5";
import Experts from './Experts';
import Intgedients from './Intgedients';
import DownloadApp from './Download';

export default function ProductDetails() {
    const { product } = useContext(Medical);
    const [content, setContent] = useState(null);
    const { id } = useParams();

    async function ProducDet() {
        try {
            let data = product.find((item) => item.id.toString() === id);
            if (data) {
                setContent(data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        ProducDet();
    }, [id, product]);

    if (!content) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="mt-16">
            <div className="w-full flex flex-col lg:flex-row justify-center gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center lg:justify-start">
                    <img
                        src={content.image[0]}
                        alt={content.name}
                        className="w-[500px] h-[400px] rounded-2xl object-cover"
                    />
                </div>

                <div className="w-full flex flex-col gap-5 p-4">
                    <h1 className="text-xl sm:text-2xl text-[#0C0C0C] font-semibold">{content.name}</h1>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 ml-1">(204 reviews)</p>
                    </div>

                    <p className="text-lg font-medium">₹{content.price}</p>
                    <p className="text-sm text-gray-600">Pack of 3</p>

                    <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center justify-between w-full sm:w-auto px-3 py-2 border rounded-lg">
                            <span><GrFormSubtract /></span>
                            <p className="px-4">1</p>
                            <span><IoMdAdd /></span>
                        </div>
                        <button className="w-full sm:w-auto py-2 px-8 bg-[#3A643B] rounded-lg text-white font-medium hover:bg-[#395b3a] transition">
                            Add to Cart
                        </button>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed">{content.description}</p>

                    <Intgedients content={content} />
                    <Highlights />
                    <Usage content={content} />

                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#2E2F2E] mb-2">General Instructions</h2>
                        <div className="py-2 px-4 rounded-lg bg-[#FEDAD2]">
                            <p className="text-sm sm:text-base text-[#1A1A1ACC]">{content.instructions}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#2E2F2E] mb-3">Commonly Asked Questions</h2>
                        <div className="space-y-3">
                            {content.faqData && content.faqData.length > 0 ? (
                                content.faqData.map((faq, index) => (
                                    <div key={index} className="p-3 rounded-lg bg-[#FDEAD2]">
                                        <p className="text-base font-bold text-gray-800">Q: {faq.question}</p>
                                        <p className="text-gray-600 mt-1">A: {faq.answer}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No FAQs available</p>
                            )}
                        </div>
                    </div>

                    <div className="relative">
                        <h2 className="text-lg sm:text-xl font-bold text-[#2E2F2E] mb-3">Trust the voice</h2>
                        <div className="relative">
                            <img src="/images/Advertise.png" className="rounded-lg w-full" />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl p-3 bg-gray-400 rounded-full">
                                <IoPlayOutline className="text-white" />
                            </span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#2E2F2E]">Reviews and Rating</h2>
                        <div className="flex flex-wrap justify-end gap-3 mt-2">
                            <button className="py-2 px-4 rounded-lg shadow-md bg-white text-[#3A643B]">See more Reviews</button>
                            <button className="py-2 px-4 rounded-lg shadow-md bg-white text-[#3A643B]">Write a review</button>
                        </div>
                    </div>
                </div>
            </div>

            =            <div className="w-full flex flex-col gap-5 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold">5.0</span>
                    <div>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                        ))}
                        <p className="text-sm text-[#2E2F2E]">Based on 20 Reviews</p>
                    </div>

                </div>

                <div>
                    <div> {content.review && content.review.length > 0 ?
                        (
                            content.review.map((rev, index) =>
                            (Array.from({ length: 2 }).map((_, repeatIndex) => (
                                <div key={`${index}- ${repeatIndex}`} className='w-full flex flex-col lg:flex-row  gap-2 rounded-2xl bg-pink-200 p-4 mb-4'>
                                    <div> 
                                        <p className='w-[50px] text-[#000000] py-3 px-4 bg-white rounded-[50%]'>{rev.logo}</p>
                                    </div> 
                                    <div>
                                         <p className='mb-3'>{rev.description}</p>
                                        <div className='flex items-center gap-3'>
                                            <p className='text-base font-normal text-[#646665]'>{rev.name}</p> • <p className='text-base font-normal text-[#646665]'>{rev.date}</p> •
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))))) :
                        (
                            <p>Unable To get Review Data</p>
                        )} </div> </div>

                <Experts />
            </div>

            {/* Download Section */}
            <DownloadApp />
        </div >
    );
}
