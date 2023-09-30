import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

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
        <Button variant="outline-dark" className="botton" onClick={onAdd}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} /> Agregar
        </Button>
      ) : (
        <>
          <Button variant="outline-dark" className="botton botton-chico-uno" onClick={onLess}> - </Button>
          {quantity}
          <Button variant="outline-dark" className="botton botton-chico-uno" onClick={onAdd}> + </Button>
        </>
      )}
    </>
  );
};

export {AddToCartButton};