import React from 'react'

export default function Usage({ content }) {
    return (
        <div>
            <div className='mb-3'>
                <h1 className='text-xl font-bold text-[#2E2F2E]'>How to Use</h1>
            </div>
            <div className=' py-2 px-4 rounded-[10px] bg-[#FEDAD2]'>
                <p className='text-base font-normal text-[#1A1A1ACC]'>{content.use}</p>
            </div>
        </div>
    )
}
