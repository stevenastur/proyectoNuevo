import React from "react";
import { Button } from "react-bootstrap";

const AddToCartButton = ({ product, addToCart, removerItem, getQuantityById, quantity }) => {
  const onAdd = () => {
    addToCart(product);
  };

  const onLess = () => {
    removerItem(product);
  };

  return (
    <>
      {quantity === 0 ? (
        <Button variant="secondary" onClick={onAdd}>Agregar</Button>
      ) : (
        <>
          <Button variant="secondary" onClick={onLess}>-</Button>
          {quantity}
          <Button variant="secondary" onClick={onAdd}>+</Button>
        </>
      )}
    </>
  );
};

export {AddToCartButton};