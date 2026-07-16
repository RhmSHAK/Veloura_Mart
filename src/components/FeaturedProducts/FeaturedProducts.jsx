import ProductCard from "../ProductCard/ProductCard";
import ProductsData from "../../Data/ProductsData.json";

const FeaturedProducts = () => {

  //first 8 products show   
  const featuredProducts = ProductsData.slice(0, 8);

  return (
    <section className="mx-auto px-4 py-10">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Featured Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;