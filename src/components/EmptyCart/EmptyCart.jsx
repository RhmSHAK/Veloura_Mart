import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <FaShoppingCart className="text-6xl text-gray-400 mb-5" />

      <h2 className="text-3xl font-bold mb-3">
        Your Cart Is Empty
      </h2>

      <p className="text-gray-500 mb-6">
        Looks like you haven't added anything yet.
      </p>

      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;