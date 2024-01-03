"use client";

import { CartContext } from "@/providers/CartProvider";
import Link from "next/link";
import { useContext } from "react";

const CartCheckout = () => {
  const { cart } = useContext(CartContext);
  const overallPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  if (cart.length === 0) return;

  return (
    <div className="h-fit flex flex-col w-full md:w-1/3 bg-white rounded-lg px-4 py-3 product-cart mt-4">
      <h3 className="text-2xl mb-3">Souhrn</h3>
      <p className="flex justify-between">
        <span>Cena bez daně:</span>
        <span>{overallPrice * 0.79} Kč</span>
      </p>
      <p className="flex justify-between">
        <span>Daň:</span>
        <span>{overallPrice * 0.21} Kč</span>
      </p>
      <p className="mt-3 pt-2 border-top-black flex justify-between">
        <b>Celková cena:</b>
        <b>{overallPrice} Kč</b>
      </p>
      <Link href="/pokladna" className="primary text-center text-lg mt-6">
        Přejít k platbě
      </Link>
    </div>
  )
}

export default CartCheckout