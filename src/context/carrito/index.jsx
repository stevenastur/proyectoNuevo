import { useMemo } from "react";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [docenaQuantity, setDocenaQuantity] = useState(0);
  const [mediaDocenaQuantity, setMediaDocenaQuantity] = useState(0);

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
      const existItemIndex = currentCart.findIndex((item) => item.id === product.id);
      let updatedCart = [...currentCart];

      if (existItemIndex !== -1) {
        updatedCart = currentCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        updatedCart = [
          ...currentCart,
          { ...product, quantity: 1 },
        ];
      }

      updateQuantities(updatedCart);

      return updatedCart;
    });
  };

  const removerItem = (product, type) => {
    setCart((currentCart) => {
      const existItemIndex = currentCart.findIndex((item) => item.id === product.id);
      let updatedCart = [...currentCart];

      if (existItemIndex !== -1) {
        updatedCart = currentCart.map((item) => {
          if (item.id === product.id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }

      updateQuantities(updatedCart);

      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  const updateQuantities = (updatedCart) => {
    const updatedDocenaQuantities = { ...docenaQuantity};
    const updatedMediaDocenaQuantities = { ...mediaDocenaQuantity };

    updatedCart.forEach((item) => {
      if (item.id in updatedDocenaQuantities) {
        updatedDocenaQuantities[item.id] += item.quantity;
      } else {
        updatedDocenaQuantities[item.id] = item.quantity;
      }

      // Puedes ajustar esta lógica según tus necesidades para MediaDocenaQuantities
    });

    setDocenaQuantity(updatedDocenaQuantities);
    setMediaDocenaQuantity(updatedMediaDocenaQuantities);
  };

  

  const getQuantityById = useMemo((id, type) => {
    const item = cart.find((item) => item.id === id && item.type === type);
    return (item) => {
      console.log(`getQuantityById(${id}, ${type}):`, item);
      return item ? item.quantity : 0;
    };
  }, []);

  const getPriceById = (id) => {
    const item = cart.find((item) => item.id === id);
  
    if (item) {
      const precioDocena = item.quantity * item.precioDocena || 0;
      const precioMediaDocena = item.quantity * item.precioMediaDocena || 0;
  
      return item.type === 'Docena' ? precioDocena : precioMediaDocena;
    }
    return 0;
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
    getPriceById,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
