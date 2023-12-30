"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCard = cart.find(i => i.id === item.id);
    if (itemInCard && itemInCard.size === item.size) {
      itemInCard.quantity++;
      setCart([...cart]);
      return;
    }
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const cartItems = cart.filter(i => i.id !== item.id && i.size !== item.size);
    setCart(cartItems);
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
