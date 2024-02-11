import React, { createContext, useState, useEffect } from 'react';

export const CarteContext = createContext();

export const CarteProvider = ({ children }) => {
  // Load cart items from local storage if available, otherwise initialize as empty array
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

  const cartTotalQuantity = cartItems.length;

  return (
    <CarteContext.Provider value={{ cartItems, addToCart, removeFromCart, cartTotalQuantity }}>
      {children}
    </CarteContext.Provider>
  );
};
export default CarteProvider;