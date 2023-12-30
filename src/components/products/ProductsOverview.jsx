import { IconArrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export const ProductsOverview = ({ products }) => {
  return (
    <div className="product-overview">
      {products.map((product) => (
        <div key={product.id} className="w-full product">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + product.images[0]}
            alt={product.name}
            priority
            width={"500"}
            height={"500"}
            className="w-full h-[300px] object-cover"
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price} Kč</p>
          <Link
            href={`/produkty/${product.slug}`}
            className="primary flex justify-center items-center"
          >
            Zobrazit produkt
            <IconArrowRight stroke={1.5} size={20} className="ml-2" />
          </Link>
        </div>
      ))}
    </div>
  )
}
