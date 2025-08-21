import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DoshEffect({ item }) {
  const pen = 50;

  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold  text-gray-800 mb-10">
         Prakriti Impact
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center">
        {item.doshaEffect && item.doshaEffect.length > 0 ? (
          item.doshaEffect.map((data, index) => (
            <div
              key={data.id}
              className="group flex flex-col items-center justify-center text-center  gap-10 rounded-2xl p-5"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                <CircularProgressbar
                  value={pen}
                  styles={buildStyles({
                    pathColor: "#3b82f6",
                    trailColor: "#e5e7eb",
                    strokeLinecap: "round",
                  })}
                />

                <div className="absolute flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-inner">
                  <img
                    src={data.icon}
                    alt={data.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-gray-700 group-hover:text-blue-600">
                {data.name}
              </p>
            </div>
          ))
        ) : (
          <h1 className="text-gray-500 col-span-full text-lg">
            No Data Available
          </h1>
        )}
      </div>
    </div>
  );
}
