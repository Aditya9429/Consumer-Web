import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Intgedients({ content }) {
      const navigate = useNavigate();

  function  handleClick (id) {
    navigate(`/ingredients/${id}`); 
  };
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 cursor-pointer'>
            {
                content.ingredients && content.ingredients.length > 0 ? (
                    content.ingredients.map((item, id) => (
                        Array.from({ length: 4 }).map((_, repeatIndex) => (
                            <div key={`${item.id}-${repeatIndex}`} className='flex items-center gap-3 bg-[#FDEAD2] rounded-[12px] p-3' onClick={() => handleClick(item.uniqueId)}>
                                <div>
                                    <img src={item.img}  className='w-[54px]'/>
                                </div>
                                <div>
                                    <p className='text-lg font-bold text-[#2E2F2E] '>{item.name}</p>
                                    <p className='text-base font-normal text-[#646665]'>{item.data}</p>
                                </div>
                                <span><FaAngleRight /></span>
                            </div>
                        ))))
                ) : (
                    <h1>Sorry </h1>
                )
            }
        </div>
    )
}
