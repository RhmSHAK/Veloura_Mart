
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsData from "../../Data/ProductsData.json";
import Loading from "../../components/Loader/Loading";

const products = ProductsData;

const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = [
        "All",
        "Jersey",  //No Products Add
        "T-Shirt",
        "Shirt",
        "Panjabi",
        "Hoodie",
        "Jeans",
        "Shoes",
        "Jacket",
        "Polo",
        "Sports Cap",
        "Accessories",
        "Pants",
        "Blazer"
    ];

    // Filter products based on selected category
    const filteredProducts =
        selectedCategory === "All" ? products : products.filter(
            (product) => product.category === selectedCategory);



    return (
        <section className="mx-auto  px-4 py-2 sm:px-6 lg:px-4">
            <h2 className="mb-10 text-center text-4xl font-bold">
                Our Products
            </h2>

            {/* Category Filter */}
            <div className="mb-6 flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product All Data grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-20">
                        <Loading></Loading>
                        <h2 className="text-3xl font-bold text-gray-500">
                            No Products Found
                        </h2>
                        <p className="mt-2 text-gray-400">
                            Try another category.
                        </p>
                    </div>
                )}
            </div>

        </section>
    );
};

export default Products;