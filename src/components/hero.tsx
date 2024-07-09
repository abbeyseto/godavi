import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps, useEffect } from "react";
import * as React from "react";
import { Hero as HeroType } from "@/lib/typings";

export function Hero() {
  const [carouselData, setCarouselData] = React.useState<HeroType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const get_hero = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/hero`
      );
      const hero = await get_hero.json();
      console.log(hero);
      setCarouselData(hero.hero);
    }
    fetchData();
  }, []);

  function getTextPositionClass(position: string) {
    switch (position) {
      case "top":
        return "flex flex-col items-center justify-start";
      case "bottom":
        return "flex flex-col items-center justify-end";
      case "left":
        return "flex flex-col items-start justify-center";
      case "right":
        return "flex flex-col items-end justify-center";
      case "center":
        return "flex flex-col items-center justify-center text-center";
      default:
        return "flex flex-col items-center justify-center text-center"; // Fallback to center
    }
  }
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-full mx-auto">
        <CarouselContent>
          {carouselData.length > 0 &&
            carouselData.map((carousel) => (
              <CarouselItem key={carousel._id}>
                <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
                  <Image
                    src={carousel.imageUrl}
                    alt={carousel.title}
                    width={12000}
                    height={800}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] rounded-lg" />
                  <div
                    className={`absolute ${getTextPositionClass(
                      carousel.textPosition
                    )} p-4 text-white inset-0 px-4 sm:px-8 md:px-12 lg:px-16`}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                      {carousel.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8">
                      {carousel.subtitle}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="/categories/all"
                        className="inline-flex h-10 items-center justify-center rounded-md  text-white bg-black px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Shop Now
                      </Link>
                      <Link
                        href="/about"
                        className="inline-flex h-10 items-center justify-center rounded-md border text-white border-blue-900 bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors md:block hidden">
          <ChevronLeftIcon className="h-8 w-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors md:block hidden">
          <ChevronRightIcon className="h-8 w-8" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}

function ChevronLeftIcon(
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
