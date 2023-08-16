import { createContext } from "react";

const CartContext = createContext([]);

const CarritoCompras = ({ children }) => {
  const [cart, setCart] = useState([]);



  

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CarritoCompras };
