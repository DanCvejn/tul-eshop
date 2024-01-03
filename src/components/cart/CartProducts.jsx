"use client";

import { CartContext } from "@/providers/CartProvider";
import { IconMinus, IconMoodLookDown, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useContext } from "react";

export const CartProducts = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-2 col-span-3 w-full">
        <IconMoodLookDown size={64} stroke={1.5} />
        <p className="text-center text-2xl">Košík je prázdný</p>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-4 mt-4 w-2/3">
      {cart.map((product) => (
        <div key={product.id + product.size} className="flex justify-between bg-white rounded-lg items-center overflow-hidden px-4 py-3 product-cart">
          <div className="flex gap-8">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${product.collectionId}/${product.id}/${product.image}`}
              alt={product.name}
              width={300}
              height={200}
              priority
              className="w-[150px] h-[100px] object-contain object-center"
            />
            <div className="basic-info flex flex-col justify-center">
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-base">Velikost: {product.size}</p>
              <p className="text-base">Cena: {product.price * product.quantity} Kč ({product.price} Kč/ks)</p>
            </div>
          </div>
          <div className="flex quantity-change">
            <button
              className="rounded-l-lg"
              onClick={() => decreaseQuantity(product)}
            >
              <IconMinus size={20} strokeWidth={1.5} />
            </button>
            <span className="h-full flex items-center">{product.quantity}</span>
            <button
              className="rounded-r-lg"
              onClick={() => addToCart(product)}
            >
              <IconPlus size={20} strokeWidth={1.5} />
            </button>
            <button
              className="rounded-lg ml-4"
              onClick={() => removeFromCart(product)}
            >
              <IconTrash size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      ))}
      <button
        className="basic text-base gap-2"
        onClick={clearCart}
      >
        Vyprázdnit košík <IconTrash size={16} strokeWidth={1.5} />
      </button>
    </div>
  )
}
