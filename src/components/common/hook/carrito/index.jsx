import { useContext } from "react";
import { CartContext } from "../../../../context/carrito";

function useCart() {
  const cart = useContext(CartContext);

  if (cart === undefined) {
    throw new Error("error99");
  }

  return cart;
}

export { useCart };
