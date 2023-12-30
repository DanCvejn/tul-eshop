import { ProductsOverview } from "@/components/products/ProductsOverview";
import { pbFetch } from "@/helpers/pbFetch";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const product = await pbFetch("products", "single", { expand: "category" }, "9dojz0i8z5rut9u");
  const products = await pbFetch("products", "all", { expand: "category", sort: "-created" });

  return (
    <>
      <header className="relative h-[50vh] bg-orange_(web)-700 rounded-[2rem] mt-8">
        <Link href={`/produkty/${product.slug}`} />
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + product.images[0]}
          alt={product.name}
          priority
          width={"2000"}
          height={"2000"}
        />
        <h2>Náš výběr!</h2>
        <div className="product">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price} Kč</p>
          <Link href={`/produkty/${product.slug}`}>
            Zobrazit produkt
          </Link>
        </div>
      </header>
      <main className="py-8">
        <h2 className="my-4 text-center text-4xl">Produkty</h2>
        <ProductsOverview products={products} />
      </main>
    </>
  )
}
