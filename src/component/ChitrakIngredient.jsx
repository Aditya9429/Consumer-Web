import React, { useContext } from 'react'
import { Medical } from '../context/Medical'
import { IoMdAdd } from 'react-icons/io';

export default function ChitrakIngredient() {
    const {product} = useContext(Medical);

  return (
          
    <div className='w-full flex flex-col  justify-center gap-10 max-w-5xl mx-auto p-10'>
          <h1 className='text-4xl font-semibold '>Products with "Chitrak" as primary ingredient</h1>
          <div className='flex flex-col lg:flex-row items-center gap-10'>
      {
        product.map((item,index) => (
            <div key={index} className='mt-2'>
                <div>
                    <img src={item.image[0]} />
                </div>
                <p className='mt-2'>{item.name}</p>
                <div className='w-full flex items-center  justify-between mt-2'>
                    <p className='text-sm text-gray-600 mt-2'> ₹ {item.price}.00</p>
                     
                     <button 
                        className="flex items-center justify-center  bg-green-600 hover:bg-green-700 
                                            text-white p-2 rounded-md shadow-md transition"
                               >
                                 <IoMdAdd className="text-lg" />
                               </button>
                </div>
            </div>
        ))
      }
      </div>
    </div>
   
  )
}
