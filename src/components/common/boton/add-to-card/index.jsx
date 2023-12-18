import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

const AddToCartButton = ({
  product,
  addToCart,
  removerItem,
  getQuantityById,
}) => {
  const onAddDocena = () => {
    addToCart(product, "Docena");
  };

  const onAddMediaDocena = () => {
    addToCart(product, "MediaDocena");
  };

  const onLessDocena = () => {
    removerItem(product, "Docena");
  };

  const onLessMediaDocena = () => {
    removerItem(product, "MediaDocena");
  };

  const docenaQuantity = getQuantityById(product.id, "Docena");
  const mediaDocenaQuantity = getQuantityById(product.id, "MediaDocena");

  return (
    <>
      {docenaQuantity === 0 && mediaDocenaQuantity === 0 ? (
        <>
          <Button className="bottonAgregarAlCarro" onClick={onAddDocena}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} />Agregar12
          </Button>

          <Button className="bottonAgregarAlCarro" onClick={onAddMediaDocena}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} />Agregar6
          </Button>
        </>
      ) : (
        <>
          <div>
            <Button className="botton botton-chico-menos" onClick={onLessDocena}> - </Button>
            <div className="cantidadEnProd">{docenaQuantity}</div>
            <Button className="botton botton-chico-mas" onClick={onAddDocena}> + </Button>
          </div>

          <div>
            <Button className="botton botton-chico-menos" onClick={onLessMediaDocena}> - </Button>
            <div className="cantidadEnProd">{mediaDocenaQuantity}</div>
            <Button className="botton botton-chico-mas" onClick={onAddMediaDocena}> + </Button>
          </div>
        </>
      )}
    </>
  );
};

export { AddToCartButton };
