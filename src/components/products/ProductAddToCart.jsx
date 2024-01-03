"use client";

import { CartContext } from "@/providers/CartProvider";
import { useContext, useState } from "react";

const sizesOptions = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];

export const ProductAddToCart = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useContext(CartContext);

  const addToCardHandle = () => {
    const addProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1,
      brand: product.expand.category.name,
      slug: product.slug,
      collectionId: product.collectionId,
    };
    addToCart(addProduct);
  }

  return (
    <div className="product-add-to-cart mt-4 flex flex-col">
      {!selectedSize && (
        <p>Vyberte velikost</p>
      )}
      <div className="flex gap-2 flex-wrap mb-4 mt-2">
        {sizesOptions.map((size) => {
          if (product.sizes.includes(size)) return (
            <div className={"input-group" + (selectedSize === size ? " selected" : "")} key={size}>
              <input
                type="radio"
                id={size}
                value={size}
                onChange={(e) => setSelectedSize(e.target.value)}
                checked={selectedSize === size ? "checked" : ""}
              />
              <label htmlFor={size}>{size}</label>
            </div>
          )
        })}
      </div>
      <button
        className="secondary text-lg"
        disabled={!selectedSize}
        onClick={() => {
          addToCardHandle();
          setSelectedSize(null);
        }}
      >
        Přidat do košíku
      </button>
    </div>
  )
}
