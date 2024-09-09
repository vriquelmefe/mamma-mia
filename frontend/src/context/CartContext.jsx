import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

   const addToCart = (pizza) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === pizza.id);
      if (index !== -1) {
        // Pizza already in cart, update the quantity
        const newCart = [...prevCart];
        newCart[index].count++;
        return newCart;
      } else {
        // New pizza, add to cart
        return [...prevCart, { ...pizza, count: 1 }];
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  const getQuantity = () => cart.reduce((total, pizza) => total + pizza.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity, totalPrice, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
