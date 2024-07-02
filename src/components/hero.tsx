import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps } from "react";

export function Hero() {
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-full mx-auto">
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Hero Image 1"
                width={12000}
                height={800}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                  Welcome to Our Brand
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8">
                  Discover the latest products and trends
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/categories/all"
                    className="inline-flex h-10 items-center justify-center rounded-md  text-white bg-blue-900 px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Hero Image 2"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                  Elevate Your Style
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8">
                  Explore our latest collection
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/categories/all"
                    className="inline-flex h-10 items-center justify-center rounded-md  text-white bg-blue-900 px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Hero Image 3"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                  Timeless Elegance
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8">
                  Discover our classic collection
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/categories/all"
                    className="inline-flex h-10 items-center justify-center rounded-md text-white bg-blue-900 px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
          <CarouselItem>
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Hero Image 4"
                width={1200}
                height={800}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)] rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                  Unleash Your Potential
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8">
                  Explore our performance collection
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/categories/all"
                    className="inline-flex h-10 items-center justify-center rounded-md  text-white bg-blue-900 px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors">
          <ChevronLeftIcon className="h-8 w-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-white hover:text-primary transition-colors">
          <ChevronRightIcon className="h-8 w-8" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}

function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
