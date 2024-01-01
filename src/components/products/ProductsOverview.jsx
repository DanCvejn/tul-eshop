import { IconArrowRight, IconMoodLookDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const ProductsOverview = ({ products }) => {
  if (products.length === 0) return (
    <div className="product-overview w-full">
      <div className="flex flex-col justify-center items-center gap-6 col-span-3 w-full">
        <IconMoodLookDown size={128} stroke={1.5} />
        <p className="text-center text-2xl">Žádné produkty nebyly nalezeny.</p>
      </div>
    </div>
  )

  return (
    <div className="product-overview">
      {products.map((product) => (
        <div key={product.id} className="w-full product">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${product.collectionId}/${product.id}/${product.image}`}
            alt={product.name}
            priority
            width={"500"}
            height={"500"}
            className="w-[90%] h-[220px] object-cover"
          />
          <div className="product-content p-4 w-full">
            <h3 className="product-name text-2xl">{product.name}</h3>
            <p className="product-price text-xl">{product.price} Kč</p>
            <Link
              href={`/produkty/${product.slug}`}
              className="primary flex justify-center items-center mt-4"
            >
              Zobrazit produkt
              <IconArrowRight stroke={1.5} size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
