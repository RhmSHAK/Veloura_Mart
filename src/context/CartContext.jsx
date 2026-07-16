import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

   // Add Product 
    const addToCart = (product) => {
        const exist = cart.find((item) => item.id === product.id);

        if (exist) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

   // Remove Card 
    const removeCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

   // Increase
    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

  // Decrease 
    const decreaseQuantity = (id) => {
        setCart(
            cart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    //Clear cart
    const clearCart = () => {
        setCart([]);
    };

    //Total Item
    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

   //Total Price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const cartInfo = {
        cart,
        addToCart,
        removeCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
    }


    return (
        <CartContext.Provider
            value={cartInfo}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;