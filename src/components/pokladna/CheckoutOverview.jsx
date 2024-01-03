"use client";
import { CartContext } from "@/providers/CartProvider";
import Image from "next/image";
import { useContext } from "react";

export const CheckoutOverview = () => {
  const { cart, aditionals } = useContext(CartContext);
  const overallPrice = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  if (cart.length === 0) return;

  return (
    <div className="w-1/3 flex flex-col gap-4">
      <div className="h-fit flex flex-col bg-white rounded-lg px-4 py-3 product-cart mt-4">
        <h3 className="text-2xl mb-3">Souhrn</h3>
        <p className="flex justify-between">
          <span>Cena bez daně:</span>
          <span>{overallPrice * 0.79} Kč</span>
        </p>
        <p className="flex justify-between">
          <span>Daň:</span>
          <span>{overallPrice * 0.21} Kč</span>
        </p>
        <p className="flex justify-between">
          <span>Doprava:</span>
          <span>{aditionals.shipping} Kč</span>
        </p>
        <p className="flex justify-between">
          <span>Platba:</span>
          <span>{aditionals.payment} Kč</span>
        </p>
        <p className="mt-3 pt-2 border-top-black flex justify-between">
          <b>Celková cena:</b>
          <b>{overallPrice + aditionals.payment + aditionals.shipping} Kč</b>
        </p>
      </div>
      <div className="h-fit flex flex-col bg-white rounded-lg px-4 py-3 product-cart mt-4">
        <h3 className="text-2xl mb-3">Obsah objednávky</h3>
        <div className="flex flex-col gap-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${item.collectionId}/${item.id}/${item.image}`}
                alt={item.name}
                width={300}
                height={200}
                priority
                className="w-[100px] h-[66px] object-contain object-center"
              />
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p>Velikost: {item.size}</p>
                <p>Počet: {item.quantity} ks</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
