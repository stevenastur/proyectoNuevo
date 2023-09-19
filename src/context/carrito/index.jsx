import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existItem = currentCart.find((item) => item.id === product.id);
      if (existItem) {
        const updatedCart = currentCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return updatedCart;
      } else {
        const newCart = [...currentCart, { ...product, quantity: 1 }];
        return newCart;
      }
    });
  };

  const removerItem = (product) => {
    setCart((currentCart) => {
      const existItem = currentCart.find((item) => item.id === product.id);
      if (existItem) {
        const updatedCart = currentCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return updatedCart.filter((item) => item.quantity > 0);
      }
      return currentCart;
    });
  };

  const getQuantityById = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    setCart,
    addToCart,
    removerItem,
    getQuantityById,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
