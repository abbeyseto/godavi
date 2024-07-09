"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useMemo, SVGProps, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Products {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
}

const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Sony" },
  { id: 4, name: "LG" },
  { id: 5, name: "Panasonic" },
  { id: 6, name: "Philips" },
  { id: 7, name: "Bose" },
  { id: 8, name: "Beats" },
  { id: 9, name: "Sennheiser" },
  { id: 10, name: "JBL" },
];

const AllProducts: Products[] = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro",
    brand: "Apple",
    image: "/placeholder.svg",
    price: 999.99,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 Ultra",
    brand: "Samsung",
    image: "/placeholder.svg",
    price: 1199.99,
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Headphones",
    brand: "Sony",
    image: "/placeholder.svg",
    price: 349.99,
  },
  {
    id: 4,
    name: "LG OLED CX TV",
    brand: "LG",
    image: "/placeholder.svg",
    price: 1499.99,
  },
  {
    id: 5,
    name: "Panasonic Lumix DC-S5 Camera",
    brand: "Panasonic",
    image: "/placeholder.svg",
    price: 1999.99,
  },
  {
    id: 6,
    name: "Philips Hue Smart Bulb",
    brand: "Philips",
    image: "/placeholder.svg",
    price: 49.99,
  },
  {
    id: 7,
    name: "Bose Noise Cancelling Headphones 700",
    brand: "Bose",
    image: "/placeholder.svg",
    price: 379.99,
  },
  {
    id: 8,
    name: "Beats Solo Pro Wireless Headphones",
    brand: "Beats",
    image: "/placeholder.svg",
    price: 299.99,
  },
  {
    id: 9,
    name: "Sennheiser HD 6XX Series Headphones",
    brand: "Sennheiser",
    image: "/placeholder.svg",
    price: 199.99,
  },
  {
    id: 10,
    name: "JBL Charge 5 Portable Bluetooth Speaker",
    brand: "JBL",
    image: "/placeholder.svg",
    price: 179.99,
  },
];

export function ProductList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(AllProducts);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data...");
      console.log(searchParams);
      const category = searchParams.get('category_id');
      const get_products = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${category}`
      );
      const get_products_data = await get_products.json();
      setProducts(get_products_data.products);
    }
    fetchData();
  }, [searchParams]);

  const handleBrandSelect = (brandId: number) => {
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
        : selectedBrands.includes(brands.find((brand) => brand.name === product.brand)?.id ?? -1)
    );
  }, [products, selectedBrands]);

  return (
    <div className="container mx-auto mt-6 px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Filters</h2>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Brand</h3>
          <div className="grid gap-2">
            {/* Dropdown for small screens */}
            <div className="block md:hidden">
              <select
                multiple
                // value={selectedBrands}
                onChange={(e) => {
                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => parseInt(option.value));
                  setSelectedBrands(selectedOptions);
                }}
                className="border rounded p-2 w-full"
              >
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Checkboxes for larger screens */}
            <div className="hidden md:block">
              {brands.map((brand) => (
                <Label key={brand.id} className="flex items-center gap-2 font-normal m-2">
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
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Products</h2>
          <div className="flex items-center gap-4">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGridIcon className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <ListIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.brand}</p>
                  <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-background rounded-lg overflow-hidden shadow-lg flex items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-48 h-48 object-cover"
                />
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.brand}</p>
                  <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
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
