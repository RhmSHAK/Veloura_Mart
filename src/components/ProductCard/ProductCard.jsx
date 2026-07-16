import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { id,name,category,image,price,oldPrice,rating, } = product;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}
      <div className="space-y-4 p-5">

        {/* Category */}
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {category}
        </span>

        {/* Product Name */}
        <h3 className="line-clamp-2 text-xl font-bold text-gray-800">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span className="font-medium">{rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-600">
            ৳{price}
          </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            to={`/products/${id}`}
            className="flex-1 rounded-xl border border-gray-300 py-3 text-center font-semibold transition hover:border-blue-600 hover:text-blue-600"
          >
            View Details
          </Link>

          <button className="flex items-center justify-center rounded-xl bg-blue-600 px-5 text-white transition hover:bg-blue-700">
            <FaShoppingCart size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;