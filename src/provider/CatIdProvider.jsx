"use client"
// Import React and necessary hooks from the 'react' library
import React, { createContext, useContext, useState } from "react";

// Create a context to manage and share state related to category and subcategory IDs
const CatIdContext = createContext();

// Create a provider component to wrap around the application and manage the context state
export const CatIdProvider = ({ children }) => {
  // Initialize state for category ID, subcategory ID, and dua name in English
  const [catId, setCatId] = useState(1);
  const [subCatId, setSubCatId] = useState(null);
  const [duaNameEn, setDuaNameEn] = useState(null);

  // Define the values to be provided by the context
  const values = {
    catId,
    setCatId,
    subCatId,
    setSubCatId,
    duaNameEn,
    setDuaNameEn,
  };

  // Provide the context values to the wrapped components
  return (
    <CatIdContext.Provider value={values}>{children}</CatIdContext.Provider>
  );
};

// Create a custom hook 'useCatId' to conveniently access the context values
export const useCatId = () => {
  return useContext(CatIdContext);
};
