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
  docenaQuantity,
  mediaDocenaQuantity,
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


  return (
    <>
      {getQuantityById(product.id, "Docena") === 0 && getQuantityById(product.id, "MediaDocena") === 0 ? (
        <>
          <Button className="bottonAgregarAlCarro" onClick={onAddDocena} style={{ marginBottom: '0.2rem' }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} />
          </Button>

          <Button className="bottonAgregarAlCarro" onClick={onAddMediaDocena} style={{ marginTop: '0.2rem' }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} />
          </Button>
        </>
      ) : (
        <>
          <div className="mas-menos-docena">
            <Button className="botton botton-chico-menos" onClick={onLessDocena}> - </Button>
            <div className="cantidadEnProd">{getQuantityById(product.id, "Docena")}</div>
            <Button className="botton botton-chico-mas" onClick={onAddDocena}> + </Button>
          </div>

          <div className="mas-menos-media-docena">
            <Button className="botton botton-chico-menos" onClick={onLessMediaDocena}> - </Button>
            <div className="cantidadEnProd">{getQuantityById(product.id, "MediaDocena")}</div>
            <Button className="botton botton-chico-mas" onClick={onAddMediaDocena}> + </Button>
          </div>
        </>
      )}
    </>
  );
};

export { AddToCartButton };
