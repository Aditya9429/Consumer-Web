import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
export default function DoshEffect({ item }) {
    const pen = 50;
    return (
        <div className="p-5">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
                Prakriti Impact
            </h1>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 p-5">
                {item.doshaEffect && item.doshaEffect.length > 0 ? (
                    item.doshaEffect.map((data, index) => (
                        <div
                            className="flex flex-col items-center justify-center text-center"
                            key={data.id}
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 md:border-6 lg:border-8 border-blue-300 transition-all duration-300 ease-in-out rounded-full flex items-center justify-center gap-10 ">
                                <img
                                    src={data.icon}
                                    alt={data.name}
                                    className="p-3 sm:p-4 md:p-5 object-contain"
                                />
                            </div>
                            <p className="mt-2 text-sm md:text-base lg:text-lg font-medium">
                                {data.name}
                            </p>
                        </div>
                    ))
                ) : (
                    <h1 className="text-gray-500">No Data Available</h1>
                )}
            </div>
        </div>

    )
}
