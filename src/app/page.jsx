import { Header } from "@/components/Header";
import { ProductsOverview } from "@/components/products/ProductsOverview";
import { pbFetch } from "@/helpers/pbFetch";
import Link from "next/link";

export default async function Home() {
  const nikeProducts = await pbFetch("products", "count", {
    expand: "category",
    sort: "-created",
    filter: "(category.slug = 'nike')",
  }, null, null, 3);
  const adidasProducts = await pbFetch("products", "count", {
    expand: "category",
    sort: "-created",
    filter: "(category.slug = 'adidas')",
  }, null, null, 3);
  const pumaProducts = await pbFetch("products", "count", {
    expand: "category",
    sort: "-created",
    filter: "(category.slug = 'puma')",
  }, null, null, 3);

  return (
    <>
      <Header />
      <main className="py-8 container">
        <h2 className="my-4 text-center text-4xl">Produkty</h2>
        <h3 className="py-4 text-center text-3xl">Nike</h3>
        <ProductsOverview products={nikeProducts.items} />
        <Link href="/produkty?category=nike" className="primary my-4 w-fit text-xl mx-auto">
          Zobrazit více bot od Nike
        </Link>
        <h3 className="py-4 text-center text-3xl">Adidas</h3>
        <ProductsOverview products={adidasProducts.items} />
        <Link href="/produkty?category=adidas" className="primary my-4 w-fit text-xl mx-auto">
          Zobrazit více bot od Adidas
        </Link>
        <h3 className="py-4 text-center text-3xl">Puma</h3>
        <ProductsOverview products={pumaProducts.items} />
        <Link href="/produkty?category=puma" className="primary my-4 w-fit text-xl mx-auto">
          Zobrazit více bot od Puma
        </Link>
      </main>
    </>
  )
}
