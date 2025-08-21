import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";

export default function Products({ id, image, name, price, quantity }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/item/${id}`);
  }

  return (
    <div 
      className="flex flex-col  items-center rounded-2xl  
                  cursor-pointer overflow-hidden"
      onClick={handleClick}
    >

      <div className="w-full h-[400px] flex justify-center ">
        <img 
          className="w-full max-w-[400px] h-full object-cover rounded-2xl" 
          src={image[0]} 
          alt={name} 
        />
      </div>

   
      <div className="w-full max-w-[400px] flex flex-col items-center p-4 text-center">
    
        <h2 className="text-base font-medium text-gray-800 line-clamp-2">
          {name}
        </h2>

    
        <p className="text-sm text-gray-600 mt-2">
          ₹ {price}.00 • {quantity[0]}
        </p>

      
        <div className="flex items-center justify-between w-full mt-3">
        
          <div className="flex items-center gap-1">
            <div className="flex items-center ml-23 lg:ml-38">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-500 ml-1">(52)</p>
          </div>

         
          <button 
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 
                       text-white p-2 rounded-md shadow-md transition"
          >
            <IoMdAdd className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  )
}
