import { ProductAddToCart } from "@/components/products/ProductAddToCart";
import { pbFetch } from "@/helpers/pbFetch";
import { IconMan, IconWoman } from "@tabler/icons-react";
import Image from "next/image";

const page = async ({ params }) => {
  const product = await pbFetch("products", "single", {
    expand: "category",
  }, `slug="${params.slug}"`);

  return (
    <div className="container pt-8 product-detail">
      <div className="product-detail__header flex max-md:flex-col items-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${product.collectionId}/${product.id}/${product.image}`}
          alt={product.name}
          width={900}
          height={600}
          priority
        />
        <div className="basic-content">
          <h2 className="text-4xl">{product.name}</h2>
          <p className="text-lg">{product.sex === "male" ? "Pánské boty" : "Dámské boty"}</p>
          <p className="price">{product.price} Kč</p>
          <p className="brand flex justify-center items-center gap-2">
            {product.expand.category.name}
            {product.sex === "male" ?
              <IconMan stroke={1.5} size={32} /> :
              <IconWoman stroke={1.5} size={32} />
            }
          </p>
          <ProductAddToCart product={product} />
        </div>
      </div>
      <div className="product-detail__body flex max-md:flex-col-reverse gap-4 mt-8">
        <div className="product-images grid grid-cols-2 max-md:grid-cols-1 max-md:gap-4 gap-2 w-[50%] max-md:w-full">
          {product.images.map((image) => {
            return (
              <Image
                key={image}
                src={`${process.env.NEXT_PUBLIC_API_URL}/api/files/${product.collectionId}/${product.id}/${image}`}
                alt={product.name}
                width={900}
                height={600}
                className="w-full h-full"
              />
            )
          })}
        </div>
        <div className="product-description w-[50%] max-md:w-full py-4 px-8 max-md:px-4">
          <h3 className="text-2xl mb-2 max-md:text-[2rem]">Popis</h3>
          <p className="max-md:text-[1rem]">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default page