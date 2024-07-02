import Link from "next/link"
import Image from "next/image";
export function ProductCategories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Product Categories
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find the perfect products for your needs in our diverse collection.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="categories/health_beauty" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src="/placeholder.svg"
              alt="Category Image"
              width={300}
              height={400}
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight text-center">Health & Beauty</h3>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="categories/health_beauty" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src="/placeholder.svg"
              alt="Category Image"
              width={300}
              height={400}
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight text-center">Health & Beauty</h3>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="categories/apparel" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src="/placeholder.svg"
              alt="Category Image"
              width={300}
              height={400}
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight text-center">Apparel</h3>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="categories/home_garden" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src="/placeholder.svg"
              alt="Category Image"
              width={300}
              height={400}
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight text-center">Home & Garden</h3>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="categories/sports_outdoor" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src="/placeholder.svg"
              alt="Category Image"
              width={300}
              height={400}
              className="[grid-area:stack] object-cover w-full aspect-[3/4]"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight text-center">Sports & Outdoors</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
