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
        <Button  className="bottonAgregarAlCarro" onClick={onAdd}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} /> Agregar
        </Button>
      ) : (
        <>
          <Button  className="botton botton-chico-menos" onClick={onLess}> - </Button>
          <div className="cantidadEnProd">{quantity}</div>
          <Button  className="botton botton-chico-mas" onClick={onAdd}> + </Button>
        </>
      )}
    </>
  );
};

export {AddToCartButton};