import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prods) => {
    const prodInCart = cart.findIndex(item => item.id === prod.id)

    if(prodInCart >= 0){
      const newCart = structuredClone(cart)
      newCart[prodInCart].quantity += 1
      return setCart(newCart)
    }
    setCart(prevState => ([
      ...prevState,
      {
        ...prod,
        quantity: 1
      }
    ]))
  };

  const removeToCart = () => {};

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={(cart, addToCart, removeToCart, clearCart)}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
