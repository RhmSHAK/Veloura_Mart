import { useParams } from "react-router";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import ProductsData from "../../Data/ProductsData.json";
import useCart from "../../hook/useCart";

const ProductDetails = () => {
  const { id } = useParams();

   const {addToCart} = useCart();

  const product = ProductsData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div>

          {/* Category */}
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-4xl font-bold text-gray-800">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{product.rating}</span>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-bold text-blue-600">
              ৳{product.price}
            </span>

          </div>

          {/* Description */}
          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">
              Available Colors
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="rounded-full border px-5 py-2 transition hover:bg-blue-600 hover:text-white"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">
              Sizes
            </h3>

            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="h-11 w-11 rounded-lg border font-medium transition hover:bg-blue-600 hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div className="mt-8">
            {product.inStock ? (
              <span className="font-semibold text-green-600">
                ✓ In Stock
              </span>
            ) : (
              <span className="font-semibold text-red-600">
                ✗ Out of Stock
              </span>
            )}
          </div>

          {/* Button */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
             onClick={()=> addToCart(product)}
             className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              <FaShoppingCart />
              Add To Cart
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;