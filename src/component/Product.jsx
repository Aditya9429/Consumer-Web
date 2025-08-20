import React, { useContext, useEffect, useState } from 'react'
import { Medical } from '../context/Medical'
import Products from './Products';

export default function Product() {
  const { product } = useContext(Medical);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(product);
  }, [product]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <Products
          key={index}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}
