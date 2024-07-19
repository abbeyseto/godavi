import { Category } from "@/lib/typings";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductCategoriesProps {
  category: Category;
}

// Utility function to generate a random pastel color
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 156 + 100); // 100-255 for a pastel color
  const g = Math.floor(Math.random() * 156 + 100);
  const b = Math.floor(Math.random() * 156 + 100);
  return `rgba(${r}, ${g}, ${b}, 0.4)`; // Adjust alpha for subtlety
};

const CategoryCard: React.FC<ProductCategoriesProps> = ({ category }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(generateRandomColor());
  }, []);

  return (
    <div
      key={category._id}
      className="relative group max-w-56 overflow-hidden rounded-3xl"
    >
      <Link
        href={`categories/${category.slug.current}`}
        className="absolute inset-0 z-10"
        prefetch={false}
      >
        <span className="sr-only">View</span>
      </Link>
      <div className="relative w-full aspect-w-1 aspect-h-1">
        <Image
          src={category.imageUrl ?? ""}
          alt={category.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-300"
          style={{ backgroundColor: bgColor }}
        ></div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/70 transition-all duration-100 text-black group-hover:text-white p-2 flex flex-col justify-end group-hover:justify-center transform group-hover:transform-none">
          <h3 className="font-semibold text-lg tracking-tight text-center transition-colors duration-100">
            {category.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
