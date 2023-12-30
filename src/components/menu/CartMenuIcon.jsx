"use client";

import { CartContext } from "@/providers/CartProvider";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";

export const CartMenuIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link href="/kosik" className="relative cart-icon">
      <IconShoppingCart size={28} stroke={1.5} />
      <span className="absolute -top-1 -right-1 rounded-full bg-red-200 text-white text-xs px-1">
        {cart.length}
      </span>
    </Link>
  )
}
