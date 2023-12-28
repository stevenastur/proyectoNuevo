import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("cart", JSON.stringify(cart));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart]);

  const addToCart = (product, type) => {
    setCart((currentCart) => {
      const existItem = currentCart.find((item) => item.id === product.id && item.type === type);
      if (existItem) {
        const updatedCart = currentCart.map((item) => {
          if (item.id === product.id && item.type === type) {
            return { ...item, quantity: item.quantity + 1, type };
          }
          return item;
        });
        return updatedCart;
      } else {
        const newCart = [...currentCart, { ...product, type, quantity: 1 }];
        return newCart;
      }
    });
  };


  const removerItem = (product, type) => {
    setCart((currentCart) => {
      const existItem = currentCart.find((item) => item.id === product.id && item.type === type);
      if (existItem) {
        const updatedCart = currentCart.map((item) => {
          if (item.id === product.id && item.type === type) {
            return { ...item, quantity: item.quantity - 1, type  };
          }
          return item;
        });
        return updatedCart.filter((item) => item.quantity > 0);
      }
      return currentCart;
    });
  };
  
  

  const getQuantityById = (id, type) => {
    const item = cart.find((item) => item.id === id && item.type === type);
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
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
