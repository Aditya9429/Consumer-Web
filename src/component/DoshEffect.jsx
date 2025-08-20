import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
export default function DoshEffect({ item }) {
    const pen = 50;
    return (
        <div className='p-5'>
            <h1>Prakriti Impact</h1>
            <div className='grid grid-cols-3 lg:grid-cols-3 gap-7 p-5'>
            {
                item.doshaEffect && item.doshaEffect.length > 0 ? (
                    item.doshaEffect.map((data, index) => (
                        <div className=' ' key={data.id} cl >
                            <div
                                className="w-[100px] h-[100px]   border-7 border-blue-300 transition-all duration-400 ease-in-out rounded-full"
                            >                        <img src={data.icon} className='p-5' />
                            </div>
                            <p>{data.name}</p>

                        </div>
                    ))
                ) : (
                    <h1></h1>
                )
            }
            </div>
        </div>
    )
}
