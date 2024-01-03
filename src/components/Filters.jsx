"use client";
import { IconCheck } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Range } from "react-range";

const sexOptions = [
  {
    value: "male",
    label: "Pánské",
  },
  {
    value: "female",
    label: "Dámské",
  }
];

const sizesOptions = ["37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];

const colorsOptions = [
  {
    value: "black",
    label: "Černá",
  },
  {
    value: "white",
    label: "Bílá",
  },
  {
    value: "red",
    label: "Červená",
  },
  {
    value: "blue",
    label: "Modrá",
  },
  {
    value: "green",
    label: "Zelená",
  },
  {
    value: "yellow",
    label: "Žlutá",
  },
  {
    value: "gray",
    label: "Šedá",
  },
];

const priceOptions = [0, 10000];

export const Filters = ({ brands, queryParams, products, counts }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [sex, setSex] = useState(queryParams.sex || null);
  const [brandsArray, setBrandArray] = useState(queryParams.category ? queryParams.category.split(",") : []);
  const [sizes, setSizes] = useState(queryParams.sizes ? queryParams.sizes.split(",") : []);
  const [colors, setColors] = useState(queryParams.colors ? queryParams.colors.split(",") : []);
  const [price, setPrice] = useState([parseInt(queryParams.price_from) || priceOptions[0], parseInt(queryParams.price_to) || priceOptions[1]]);
  const [finalPrice, setFinalPrice] = useState([price[0], price[1]]);

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (sex) {
      current.set("sex", sex);
    } else {
      current.delete("sex");
    }
    if (brandsArray.length > 0) {
      current.set("category", brandsArray.join(","));
    } else {
      current.delete("category");
    }
    if (sizes.length > 0) {
      current.set("sizes", sizes.join(","));
    } else {
      current.delete("sizes");
    }
    if (colors.length > 0) {
      current.set("colors", colors.join(","));
    } else {
      current.delete("colors");
    }
    if (finalPrice[0] > priceOptions[0] - 1) {
      current.set("price_from", finalPrice[0]);
    }
    if (finalPrice[1] < priceOptions[1] + 1) {
      current.set("price_to", finalPrice[1]);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
    router.refresh();
  }, [sex, brandsArray, sizes, colors, finalPrice])

  return (
    <div className="w-[350px] filters">
      <h3 className="text-2xl">Filtry</h3>
      <div className="filter">
        <h3>Pohlaví</h3>
        <div className="filter-content">
          {sexOptions.map(option => {
            return (
              <div className={"input-group" + (sex === option.value ? " selected" : "")} key={option.value}>
                <input
                  type="checkbox"
                  name="sex"
                  id={option.value}
                  value={option.value}
                  onChange={e => setSex(e.target.value === sex ? null : e.target.value)}
                  checked={sex === option.value ? "checked" : ""}
                />
                <label htmlFor={option.value} className="flex justify-start items-center gap-2">
                  <IconCheck size={16} stroke={3} />
                  {option.label}
                  <span>
                    {counts.sex[option.value]}
                  </span>
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Značky</h3>
        <div className="filter-content">
          {brands.map(brand => {
            return (
              <div className={"input-group" + (brandsArray.includes(brand.slug) ? " selected" : "")} key={brand.slug}>
                <input
                  type="checkbox"
                  id={brand.slug}
                  value={brand.slug}
                  onChange={e => {
                    if (brandsArray.includes(e.target.value)) {
                      setBrandArray(brandsArray.filter(item => item !== e.target.value));
                    } else {
                      setBrandArray([...brandsArray, e.target.value]);
                    }
                  }}
                  checked={brandsArray.includes(brand.slug) ? "checked" : ""}
                />
                <label htmlFor={brand.slug} className="flex justify-start items-center gap-2">
                  <IconCheck size={16} stroke={3} />
                  {brand.name}
                  <span>
                    {counts.brands.find(item => item.slug === brand.slug).count}
                  </span>
                </label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Velikost</h3>
        <div className="filter-content grid-view grid-cols-3">
          {sizesOptions.map(size => {
            return (
              <div className={"input-group" + (sizes.includes(size) ? " selected" : "")} key={size}>
                <input
                  type="checkbox"
                  id={size}
                  value={size}
                  onChange={e => {
                    if (sizes.includes(e.target.value)) {
                      setSizes(sizes.filter(item => item !== e.target.value));
                    } else {
                      setSizes([...sizes, e.target.value]);
                    }
                  }}
                  checked={sizes.includes(size) ? "checked" : ""}
                />
                <label htmlFor={size}>{size}</label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Barva</h3>
        <div className="filter-content grid-view grid-cols-2">
          {colorsOptions.map(color => {
            return (
              <div className={"input-group" + (colors.includes(color.value) ? " selected" : "")} key={color.value}>
                <input
                  type="checkbox"
                  id={color.value}
                  value={color.value}
                  onChange={e => {
                    if (colors.includes(e.target.value)) {
                      setColors(colors.filter(item => item !== e.target.value));
                    } else {
                      setColors([...colors, e.target.value]);
                    }
                  }}
                  checked={colors.includes(color.value) ? "checked" : ""}
                />
                <label htmlFor={color.value}>{color.label}</label>
              </div>
            )
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Cena</h3>
        <div className="filter-content">
          <div className="flex justify-between items-center mt-2">
            <span>{price[0]} Kč</span>
            <span>{price[1]} Kč</span>
          </div>
          <div className="range">
            <Range
              step={10}
              min={priceOptions[0]}
              max={priceOptions[1]}
              values={price}
              onChange={(values) => setPrice(values)}
              onFinalChange={(values) => setFinalPrice(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="range-track"
                  style={{
                    ...props.style,
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  key={props.key}
                  className="range-thumb"
                  style={{
                    ...props.style,
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
