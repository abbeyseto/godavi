/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RLmzRQHO2I4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
require("dotenv").config();
import Link from "next/link";
import Image from "next/image";
import { CardContent, Card } from "@/components/ui/card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React, { useEffect, useState } from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Category, Product } from "@/lib/typings";
import { useForm, SubmitHandler } from "react-hook-form";
import ProductCategories from "./product-categories";
import {
  PackageIcon,
  LightbulbIcon,
  TruckIcon,
  GlobeIcon,
  TargetIcon,
  ThumbsUpIcon,
  LogInIcon,
  MenuIcon,
} from "@/components/ui/icons";
import { Hero } from "./hero";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SalesChannels } from "./sales-channels";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const get_products = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
        { next: { revalidate: 30 } }
      );
      const get_categories = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
        { next: { revalidate: 30 } }
      );
      const get_products_data = await get_products.json();
      const get_categories_data = await get_categories.json();

      setProducts(get_products_data.products);
      setCategories(get_categories_data.categories);
    }
    fetchData();
  }, []);

  // Utility function to generate a random pastel color
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 156 + 100); // 100-255 for a pastel color
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    return `rgba(${r}, ${g}, ${b}, 0.4)`; // Adjust alpha for subtlety
  };

  return (
    <div className="flex flex-col min-h-[100dvh] flex-grow">
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
                            className="h-8 w-8 rounded-full"
                            src={category.imageUrl}
                            width={8}
                            height={8}
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
      <div className="flex-1">
        <Hero />
        <ProductCategories categories={categories} />
        <section className="bg-gray-100 py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-gray-600">
                Explore our curated selection of the best products for your
                needs.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {products
                .filter((product) => product.featured === true)
                .map((product) => (
                  <Card key={product._id} className="relative p-4 max-w-60">
                     <div
                      className="relative"
                    >
                      <Image
                        alt={product.title}
                        className="w-auto h-full "
                        width={200}
                        height={200}
                        src={product.images ?? ""}
                      />
                    </div>
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-300"
                      style={{ backgroundColor: generateRandomColor() }}
                    ></div>
                    <CardContent className="p-2 space-y-2">
                      <h3 className="text-xl font-bold">{product.title}</h3>
                      {/* <p className="text-gray-600">
                        {product.description?.slice(0, 120)} . . .
                      </p> */}
                      {/* <div className="flex justify-between items-center">
                      {/* <span className="font-bold text-blue-500">
                        ${product.price}
                      </span>{" "}
                      <Link
                        className="inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                        href="#"
                      >
                        Add to Cart
                      </Link>
                    </div> */}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
        <section id="services" className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Services</h2>
              <p className="text-gray-600">
                Godavi LLC offers a wide range of services to meet your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <PackageIcon className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">
                  Reselling Established Brands
                </h3>
                <p className="text-gray-600">
                  We specialize in reselling established brand products to our
                  customers.
                </p>
              </div>
              <div className="space-y-4">
                <TruckIcon className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Comprehensive Logistics</h3>
                <p className="text-gray-600">
                  We provide comprehensive logistics solutions to our customers.
                </p>
              </div>
              <div className="space-y-4">
                <LightbulbIcon className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Product Development</h3>
                <p className="text-gray-600">
                  We are developing innovative products for the global
                  marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SalesChannels />
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                Godavi LLC is committed to achieving our mission.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <TargetIcon className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Enduring Business</h3>
                <p className="text-gray-600">
                  To establish Godavi LLC as a successful and enduring business
                  for generations to come.
                </p>
              </div>
              <div className="space-y-4">
                <ThumbsUpIcon className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  To ensure customer satisfaction and provide exceptional value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <LogInIcon className="h-8 w-8" />
          <span className="text-lg font-semibold">Godavi LLC</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link
            href="/categories/all"
            className="hover:underline"
            prefetch={false}
          >
            Store
          </Link>
          <Link href="/about" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="/contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link
            href="/legals/privacy-policy"
            className="hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="/legals/terms-of-service"
            className="hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
        <p className="text-sm text-gray-400">
          &copy; {year} Godavi LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 md:px-12 flex items-center justify-between">
      <Link className="flex items-center gap-2" href="/">
        <LogInIcon className="h-8 w-8" />
        <span className="text-lg font-semibold">Godavi LLC</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/categories/all">
          Store
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/#services">
          Our Services
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <MenuIcon className="h-6 w-6 text-gray-900" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link className="hover:underline" href="/categories/all">
                  Store
                </Link>
              </MenubarItem>
              <MenubarItem>
                {" "}
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link className="hover:underline" href="#">
                  Our Services
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link className="hover:underline" href="#contact">
                  Contact
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}
