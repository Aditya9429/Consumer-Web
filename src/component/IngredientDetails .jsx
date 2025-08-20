import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Medical } from "../context/Medical";
import RelatedProduct from "./RelatedProduct";
import DownloadApp from "./Download";

export default function IngredientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product } = useContext(Medical);

  let selectedIngredient = null;
  product.forEach((p) => {
    const found = p.ingredients?.find((ing) => ing.uniqueId === id);
    if (found) selectedIngredient = found;
  });

  if (!selectedIngredient) {
    return <p className="text-center mt-10">Ingredient not found</p>;
  }



  return (
    <div>
    <div className="flex flex-col lg:flex-row justify-between gap-20 max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg ">
        <div className="">
      <button
        onClick={() => navigate(-1)} 
        className="mb-10 border border-green-700 text-green-700 px-4 py-2 bg-white rounded hover:bg-gray-300 shadow-md"
      >
        ← Back
      </button>

      <img
        src={selectedIngredient.img}
        alt={selectedIngredient.name}
        className="w-[350px] h-80 border  object-cover rounded-lg mb-10 p-5"
      />
      <h1 className="text-2xl font-bold text-[#2E2F2E] mb-3">
        {selectedIngredient.name}
      </h1>
      <p className="text-gray-700 mb-2">{selectedIngredient.data}</p>
      <p className="text-gray-600">{selectedIngredient.details}</p>
      </div>
      <div>
      <RelatedProduct className="w-full" />
      </div>
      
      </div>
      <DownloadApp />
    </div>
  );
}
