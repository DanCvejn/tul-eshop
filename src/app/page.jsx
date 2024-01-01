import { Header } from "@/components/Header";
import { ProductsOverview } from "@/components/products/ProductsOverview";
import { pbFetch } from "@/helpers/pbFetch";

export default async function Home() {
  const product = await pbFetch("products", "single", { expand: "category" }, "9dojz0i8z5rut9u");
  const products = await pbFetch("products", "all", { expand: "category", sort: "-created" });

  return (
    <>
      <Header product={product} />
      <main className="py-8 container">
        <h2 className="my-4 text-center text-4xl">Produkty</h2>
        <ProductsOverview products={products} />
      </main>
    </>
  )
}
