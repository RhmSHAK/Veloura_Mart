import useCart from "../../hook/useCart";


const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeCart,
  } = useCart();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5 border rounded-2xl p-5 bg-white shadow-sm">

     {/* image */}
      <div className="flex items-center gap-5">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-xl"
        />
      
      {/* name & category */}
        <div>
          <h3 className="font-bold text-lg">{item.name}</h3>
          <p className="text-gray-500">{item.category}</p>
        </div>
      </div>

    {/* price */}
      <div className="text-xl font-bold text-blue-600">
        ৳{item.price}
      </div>

    {/* Quantity decrease & increase */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="w-10 h-10 border rounded-lg text-xl"
        >
          -
        </button>

        <span className="font-bold text-lg">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="w-10 h-10 border rounded-lg text-xl"
        >
          +
        </button>
      </div>

   {/* total amount */}
      <div className="font-bold text-lg">
        ৳{item.price * item.quantity}
      </div>

    {/* remove cart */}
      <button
        onClick={() => removeCart(item.id)}
        className="text-red-500 font-semibold hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;