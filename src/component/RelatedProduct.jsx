import React from 'react'
import { IoMdAdd } from 'react-icons/io'

export default function RelatedProduct() {
    const data  = [
        {
            id:1,
            img : "/images/Img3.png",
            title : "Amrutam Kuntal Care Herbal Shampoo | Healthy Natural...",
            price : "₹649.00"
        }
    ]
  return (
    <div>
        <h1 className='text-xl text-[#2E2F2E] font-semibold mb-3'>Products with "Gokhru" as primary ingredient</h1>
      {
        data.map((item,id) => (
            Array.from({length :4}).map((_,repeatIndex) => (
                <div key={`${item.id}-${repeatIndex}`} className='flex   lg:flex-row gap-5 mb-5'>
                   
                    <div>
                        <img src={item.img} />
                    </div>
                    <div className='flex flex-col  gap-4'>
                        <div>
                        <p className='text-base font-medium text-[#2E2F2E]'>{item.title}</p>
                        <p className='text-sm font-medium'>{item.price}</p>
                        </div>
                        <div className='flex items-end justify-end mt-10'>
                            <button 
                                        className="flex items-center justify-center bg-green-600 hover:bg-green-700 
                                                   text-white p-2 rounded-md shadow-md transition"
                                      >
                                        <IoMdAdd className="text-lg" />
                                      </button>
                        </div>
                    </div>
                </div>
            ))
        ))
      }
    </div>
  )
}
