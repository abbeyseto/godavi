"use client";

import Image from "next/image";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useState, useMemo, SVGProps, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { urlForImage } from "../../../../sanity/lib/image";
import LoadingSpinner from "@/components/ui/loader";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Category } from "@/lib/typings";

interface Products {
  _id: number;
  title: string;
  brand: {
    title?: string;
  };
  images: any;
  price: number;
}

interface Brands {
  id: string;
  name: string;
}

const AllProducts: Products[] = [];

export default function ProductList() {
  const params = useParams();
  const [products, setProducts] = useState<Products[]>([]);
  const [brands, setBrands] = useState<Brands[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data...");
      const { category_id } = params;
      const get_products = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${category_id}`
      );
      const get_categories = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
        { next: { revalidate: 30 } }
      );
      const get_products_data = await get_products.json();
      const get_categories_data = await get_categories.json();

      setProducts(get_products_data.products);
      setCategories(get_categories_data.categories);
      // Extract unique brands and categories
      const products = get_products_data.products;

      const uniqueBrands = products.reduce(
        (
          acc: { id: any; name: any }[],
          product: { brand: { _id: any; title: any } }
        ) => {
          if (
            !acc.find((brand: { id: any }) => brand.id === product.brand?._id)
          ) {
            acc.push({ id: product.brand?._id, name: product.brand?.title });
          }
          return acc;
        },
        []
      ).sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));

      const uniqueCategories = products.reduce(
        (
          acc: { id: any; name: any }[],
          product: { category: { _id: any; title: any } }
        ) => {
          if (
            !acc.find(
              (category: { id: any }) => category.id === product.category?._id
            )
          ) {
            acc.push({
              id: product.category?._id,
              name: product.category?.title,
            });
          }
          return acc;
        },
        []
      );
      console.log(uniqueBrands, uniqueCategories);
      setBrands(uniqueBrands);
      setIsLoaded(true);
    }
    fetchData();
  }, [params]);

  const handleBrandSelect = (brandId: string) => {
    if (selectedBrands.includes(brandId)) {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId));
    } else {
      setSelectedBrands([...selectedBrands, brandId]);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      selectedBrands.length === 0
        ? true
        : selectedBrands.includes(
            brands.find((brand) => brand.name === product.brand?.title)?.id ??
              ""
          )
    );
  }, [brands, products, selectedBrands]);

  return (
    <div>
      <section className="w-full sticky top-0 z-50 bg-white">
        <div className="container px-4 md:px-6 py-1 flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md text-base font-bold">
                  CATEGORIES
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[600px]">
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category) => (
                      <NavigationMenuItem key={category._id}>
                        <Link
                          href={`/categories/${category.slug.current}`}
                          className="flex w-[300px] py-2 items-center gap-2"
                          prefetch={false}
                        >
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={category.imageUrl}
                            width={10}
                            height={10}
                            alt={category.title}
                          />
                          {category.title}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
      <div className="container mx-auto mt-6 px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Filters</h2>
          {products.length > 0 && (
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Brand</h3>
              <div className="grid gap-2">
                <div className="block md:hidden">
                  <select
                    multiple
                    onClick={(e) => {
                      handleBrandSelect(e.currentTarget.value);
                    }}
                    className="border rounded p-2 w-full"
                  >
                    {products.length > 0 &&
                      brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      ))}
                  </select>
                </div>

                {/* Checkboxes for larger screens */}
                <div className="hidden md:block">
                  {products.length > 0 &&
                    brands.map((brand) => (
                      <Label
                        key={brand.id}
                        className="flex items-center gap-2 font-normal m-2"
                      >
                        <Checkbox
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => handleBrandSelect(brand.id)}
                        />
                        {brand.name}
                      </Label>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="flex items-center gap-4">
              <Button
                variant={viewMode === "grid" ? "customDefault" : "customOutline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <LayoutGridIcon className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "customDefault" : "customOutline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <ListIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          {!isLoaded && <LoadingSpinner />}
          {products.length > 0 && isLoaded ? (
            viewMode === "grid" ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-background rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="relative w-full h-52">
                      <Image
                        alt={product.title}
                        className="object-contain" // or "object-cover"
                        layout="fill"
                        src={urlForImage(product.images[0]) ?? ""}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg text-center font-semibold">{product.title}</h3>
                      <p className="text-gray-500 text-center">
                        {product.brand?.title}
                      </p>
                      {/* <p className="text-primary font-semibold">${product.price.toFixed(2)}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-background rounded-lg overflow-hidden shadow-lg flex items-center"
                  >
                    <Image
                      src={urlForImage(product.images[0]) ?? ""}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-48 h-48 object-cover"
                    />
                    <div className="p-4 flex-1">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-muted-foreground">
                        {product.brand.title}
                      </p>
                      {/* <p className="text-primary font-semibold">${product.price.toFixed(2)}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-start min-h-screen text-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mb-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6M9 16h6m-9 4h6a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zm0 0H3m10-14h4a2 2 0 012 2v10a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2m0-4V6m-4 4V6m-4 0V6"
                />
              </svg>
              <h2 className="text-2xl font-bold mb-2">No Products Available</h2>
              <p className="text-gray-500">
                Check back later or try a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LayoutGridIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}
