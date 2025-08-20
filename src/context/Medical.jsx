import { createContext, useState } from "react";
import { product } from "../assets/asset";

// Create context
export const Medical = createContext();

const MedicalContextProvider = (props) => {

  const value = {
    product,
  };

  return (
    <Medical.Provider value={value}>
      {props.children}
    </Medical.Provider>
  );
};

export default MedicalContextProvider;
