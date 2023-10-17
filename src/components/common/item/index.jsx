import { Card, Button, Col, Image, Row } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";
import { AddToCartButton } from "../boton/add-to-card";

const Item = ({ id, nombre, precio, verProducto, textButton, img }) => {
  const { addToCart, cart, removerItem, getQuantityById } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  const quantity = getQuantityById(id);


  return (
    <>
      <Card key={id} className="tarjeta-individual">
        <Card.Body className="columna-card">
          <Row className="imagen" onClick={verProducto}>
            <Card.Img variant="top" src={img} alt="171x180" />
          </Row>
          <Row className="columna-card-agregar" >
            <div className="titulo-prod" onClick={verProducto}>
              <Card.Title>{nombre}</Card.Title>
            </div>
            <div className="precio-agregar">
              <div>
                <Card.Text className="precio" onClick={verProducto}>$ {precio}</Card.Text>
              </div>
              <div>
                <AddToCartButton
                  product={{ id, nombre, precio }}
                  addToCart={addToCart}
                  removerItem={removerItem}
                  getQuantityById={getQuantityById}
                  quantity={quantity}
                  className= "addtoCart"
                />
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
