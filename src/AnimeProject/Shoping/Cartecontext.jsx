// CarteContext.jsx
import React, { createContext, useState } from 'react';

export const CarteContext = createContext();

export const CarteProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      setCartItems([...cartItems, item]);
    }
   
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const cartTotalQuantity = cartItems.length;

  return (
    <CarteContext.Provider value={{ cartItems, addToCart, removeFromCart, cartTotalQuantity }}>
      {children}
    </CarteContext.Provider>
  );
};
export default CarteProvider;