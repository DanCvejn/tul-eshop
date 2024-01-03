"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCard = cart.find(i => i.id === item.id);
    if (itemInCard && itemInCard.size === item.size) {
      itemInCard.quantity++;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify([...cart]));
      return;
    }
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  const decreaseQuantity = (item) => {
    const itemInCard = cart.find(i => i.id === item.id && i.size === item.size);
    if (itemInCard.quantity === 1) return removeFromCart(item);
    itemInCard.quantity--;
    setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify([...cart]));
  }

  const removeFromCart = (item) => {
    const cartItems = [];
    cart.map(i => {
      if (i.id === item.id && i.size === item.size) return;
      cartItems.push(i);
    })
    localStorage.setItem("cart", JSON.stringify([...cartItems]));
    setCart(cartItems);
  }

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  }

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) setCart(JSON.parse(cartItems));
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
