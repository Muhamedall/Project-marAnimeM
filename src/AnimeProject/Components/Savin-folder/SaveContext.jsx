import React, { createContext, useState, useEffect } from 'react';

export const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  const [savestItems, setSavesItems] = useState(JSON.parse(localStorage.getItem('saveItems')) || []);

  useEffect(() => {
    localStorage.setItem('saveItems', JSON.stringify(savestItems));
  }, [savestItems]);

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
