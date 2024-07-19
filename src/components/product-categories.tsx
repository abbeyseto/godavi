import { Category } from "@/lib/typings";
import CategoryCard from "./ui/category_card";

interface ProductCategoriesProps {
  categories: Category[];
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  categories,
}) => {
  return (
    <section className="w-full py-10">
      <div className="flex items-center justify-center min-h-screen">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">
                Explore Our Product Categories
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find the perfect products for your needs in our diverse
                collection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
