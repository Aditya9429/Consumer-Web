import React from 'react'

export default function Highlights() {
    const data = [
        {
            id: 1,
            title: "Helps with Dry, Frizzy Hair"
        },
        {
            id: 2,
            title: "Helps with Dry, Frizzy Hair"
        },
        {
            id: 3,
            title: "Helps with Dry, Frizzy Hair"
        },
        {
            id: 4,
            title: "Helps with Dry, Frizzy Hair"
        },
    ]
    return (
        <div className=''>
            <div className='flex items-center gap-3 mb-3'>
               
                    <img src="/images/Medi.png" className='w-[30px]'/>
                    <p className='text-xl font-bold text-[#2E2F2E]'>Product Highlight</p>
               

            </div>
            <div className='flex items-center gap-5'> 
            {
                data.map((item, index) => (
                    <div key={index} className='"w-[100px] h-[200px] bg-[#fcefdc] rounded-xl flex items-end p-3 shadow-sm"'>

                        <p className='text-sm font-bold text-[#2E2F2E]'>{item.title}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
