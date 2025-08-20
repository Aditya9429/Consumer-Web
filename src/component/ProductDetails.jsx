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
        <div className='mt-16'>
            <div className='w-full flex flex-col lg:flex-row justify-center gap-5 max-w-5xl mx-auto px-6'>
                <div>
                    <img src={content.image[0]} className='w-[600px] h-[430px]' />
                </div>
                <div className='w-full flex flex-col gap-5 p-5'>
                    <h1 className='text-2xl text-[#0C0C0C] font-medium'>{content.name}</h1>

                    <div className='flex items-center gap-2'>
                        <div className='flex items-center justify-center'>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className='text-yellow-400 text-sm'>★</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 ml-1">(204 reviews)</p>
                    </div>

                    <p>₹{content.price}</p>
                    <p>Pack of 3</p>

                    <div className='w-full max-w-[700px] flex items-center gap-4'>
                        <div className='w-full flex items-center gap-20 py-2 px-3 border rounded-[8px]'>
                            <span><GrFormSubtract /></span>
                            <p>1</p>
                            <span><IoMdAdd /></span>
                        </div>
                        <button className='w-full py-2 px-10 bg-[#3A643B] rounded-[8px] text-base font-medium text-white hover:bg-[#395b3a] duration-300'>
                            Add to Cart
                        </button>
                    </div>

                    <p>{content.description}</p>
                    <Intgedients content={content}/>
                    <Highlights />
                    <Usage content={content} />

                    <div>
                        <div className='mb-3'>
                            <h1 className='text-xl font-bold text-[#2E2F2E]'>General Instructions</h1>
                        </div>
                        <div className='py-2 px-4 rounded-[10px] bg-[#FEDAD2]'>
                            <p className='text-base font-normal text-[#1A1A1ACC]'>{content.instructions}</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-xl font-bold  text-[#2E2F2E] #2E2F2Emb-3'>Commonly Asked Questions</h1>
                        <div className='space-y-3'>
                            {content.faqData && content.faqData.length > 0 ? (
                                content.faqData.map((faq, index) => (
                                    <div key={index} className='p-3  rounded-lg bg-[#FDEAD2]'>
                                        <p className='text-base font-bold text-gray-800'>Q: {faq.question}</p>
                                        <p className='text-gray-600 mt-1'>A: {faq.answer}</p>
                                    </div>
                                ))
                            ) : (
                                <p className='text-gray-500'>No FAQs available</p>
                            )}
                        </div>
                    </div>
                    <div className='relative'>
                        <div>
                            <h1 className='text-xl font-bold  text-[#2E2F2E] mb-3'>Trust the voice</h1>
                        </div>
                        <div className=''>
                            <img src="/images/Advertise.png" className=' rounded-lg' />
                        </div>

                        <span className="absolute top-[48%]  left-[48%] text-5xl p-2 bg-gray-400 rounded-full "><IoPlayOutline className='text-white text-4xl' /></span>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-xl font-bold  text-[#2E2F2E]'>Reviews and Rating</h1>
                        </div>
                        <div className='flex justify-end gap-3'>
                            <button className='py-4 px-4 text-center rounded-[8px] shadow-md bg-white text-[#3A643B]'>See more Reviews</button>
                            <button className='py-4 px-4 text-center rounded-[8px] shadow-md bg-white text-[#3A643B]'>Write a review</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full flex flex-col  justify-center gap-5 max-w-5xl mx-auto px-6'>
                <div className='flex items-center gap-3'>
                    <span className='text-3xl font-bold'>5.0</span>
                    <div className='max-w-[200px]'>
                        {
                            Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className=" gap-3 text-yellow-400 text-sm">★</span>
                            ))
                        }
                        <p className='text-sm font-normal text-[#2E2F2E]'>Based on 20 Reviews</p>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            content.review && content.review.length > 0 ? (
                                content.review.map((rev, index) => (
                                    Array.from({ length: 2 }).map((_, repeatIndex) => (
                                        <div key={`${index}-${repeatIndex}`} className='w-full flex gap-2 rounded-2xl bg-pink-200 p-4 mb-4'>
                                            <div>
                                                <p className='text-[#000000] py-3 px-4 bg-white rounded-[50%]'>{rev.logo}</p>
                                            </div>
                                            <div>
                                                <p className='mb-3'>{rev.description}</p>
                                                <div className='flex items-center gap-3'>
                                                    <p className='text-base font-normal text-[#646665]'>{rev.name}</p> •
                                                    <p className='text-base font-normal text-[#646665]'>{rev.date}</p> •
                                                    {
                                                        Array.from({ length: 5 }).map((_, i) => (
                                                            <span key={i} className="text-yellow-400 text-sm">★</span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))
                            ) : (
                                <p>Unable To get Review Data</p>
                            )
                        }
                    </div>

                </div>
                <Experts />
            
            </div>
            <DownloadApp />
        </div>
    );
}
