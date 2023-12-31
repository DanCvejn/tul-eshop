import { Filters } from '@/components/Filters';
import { pbFetch } from '@/helpers/pbFetch';
import { Suspense } from 'react';
import Loading from './loading';
import { ProductsOverviewFiltred } from '@/components/products/ProductsOverviewFiltred';
import { FilterOpener } from '@/components/FilterOpener';

const page = async ({ searchParams }) => {
  const filtersKeys = Object.keys(searchParams);
  const filters = filtersKeys.map(key => {
    if (searchParams[key] === "") return "";
    if (key === "category") {
      return "(" + searchParams[key].split(",").map(category => {
        return `category.slug = "${category}"`;
      }).filter(filter => filter !== "").join(" || ") + ")";
    };
    if (key === "sizes") {
      return "(" + searchParams[key].split(",").map(size => {
        return `sizes ~ "${size}"`;
      }).filter(filter => filter !== "").join(" || ") + ")";
    };
    if (key === "colors") {
      return "(" + searchParams[key].split(",").map(color => {
        return `color ~ "${color}"`;
      }).filter(filter => filter !== "").join(" || ") + ")";
    };
    if (key === "price_from") {
      return `price >= ${searchParams[key]}`;
    };
    if (key === "price_to") {
      return `price <= ${searchParams[key]}`;
    };
    return `${key} = "${searchParams[key]}"`;
  }).filter(filter => filter !== "");
  const brands = await pbFetch("categories", "all");
  const allProducts = await pbFetch("products", "all", { expand: "category" });
  const filtersProductsCount = {
    sex: {
      male: allProducts.filter(product => product.sex === "male").length,
      female: allProducts.filter(product => product.sex === "female").length,
    },
    brands: brands.map(brand => {
      return {
        slug: brand.slug,
        count: allProducts.filter(product => product.expand.category.slug === brand.slug).length
      }
    }),
  }

  return (
    <div className="container">
      <div className='flex flex-col md:flex-row gap-8 mt-8 relative'>
        <Filters brands={brands} queryParams={searchParams} counts={filtersProductsCount} />
        <FilterOpener />
        <Suspense fallback={<Loading />}>
          <ProductsOverviewFiltred filters={filters} />
        </Suspense>
      </div>
    </div>
  )
}

export default page