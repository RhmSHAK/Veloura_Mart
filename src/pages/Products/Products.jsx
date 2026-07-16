
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsData from "../../data/ProductsData.json";

const products = ProductsData;

const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = [
        "All",
        ...new Set(products.map((product) => product.category)),
    ];

    // Filter products based on selected category
    const filteredProducts =
        selectedCategory === "All" ? products : products.filter(
                                                       (product) => product.category === selectedCategory );



    return (
        <section className="mx-auto  px-4 py-2 sm:px-6 lg:px-4">
            <h2 className="mb-10 border-2 text-center text-4xl font-bold">
                Our Products
            </h2>

            {/* Category Filter */}
            <div className="mb-6 flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline"  }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

        {/* Product All Data grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
};

export default Products;