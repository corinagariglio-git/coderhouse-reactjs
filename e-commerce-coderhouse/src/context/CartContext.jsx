import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prev) => {
      const exists = prev.find((prod) => prod.id === item.id);

      if (exists) {
        return prev.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      }

      return [...prev, { ...item, quantity }];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
