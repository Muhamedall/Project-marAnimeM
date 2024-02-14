import React, { createContext, useState, useEffect } from 'react';

export const CarteContext = createContext();

export const CarteProvider = ({ children }) => {
  // Load  items from local storage  initialize as empty array
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  // Update local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
  const cleareCaret = () => {
    
    setCartItems([]);
  };
  const cartTotalQuantity = cartItems.length;

  return (
    <CarteContext.Provider value={{ cartItems, addToCart, removeFromCart, cartTotalQuantity ,cleareCaret }}>
      {children}
    </CarteContext.Provider>
  );
};
export default CarteProvider;