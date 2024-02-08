// CarteContext.jsx
import React, { createContext, useState } from 'react';

export const SaveContext= createContext();


export const SaveProvider = ({ children }) => {
  const [savestItems, setSavesItems] =useState([])

  const addToSave = (item) => {
    const isItemInSaves = savestItems.some((saveItem) => saveItem.id === item.id);

    if (!isItemInSaves) {
      setSavesItems([...savestItems, item]);
    }
   
  };

  const removeFromSaved = (itemId) => {
    const updatedSaves = savestItems.filter((item) => item.id !== itemId);
    setSavesItems(updatedSaves);
  };

 

  return (
    <SaveContext.Provider value={{ savestItems, addToSave, removeFromSaved }}>
      {children}
    </SaveContext.Provider>
  );
};
export default SaveProvider;