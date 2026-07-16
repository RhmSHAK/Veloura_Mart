import useCart from "../../hook/useCart";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import CartItem from "../../components/ProductCard/CartItem";



const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">
          Shopping Cart
        </h1>

        <button
          onClick={clearCart}
          className="text-red-500 font-semibold"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-5">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex justify-end">
        <div className="text-right">
          <h2 className="text-3xl font-bold mb-4">
            Total: ৳{totalPrice}
          </h2>

        </div>
      </div>
    </section>
  );
};

export default Cart;