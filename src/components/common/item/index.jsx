import { Card, Button, Row, Col } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";
import { AddToCartButton } from "../boton/add-to-card";

const Item = ({ id, nombre, precio, verProducto, textButton }) => {
  const { addToCart, cart, removerItem, getQuantityById } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  const quantity = getQuantityById(id);

  return (
    <>
      <Card key={id} className="tarjeta-individual">
        <Card.Body className="cuerpo-card">
          <Col className="columna-card">
            <Card.Title>{nombre}</Card.Title>
          </Col>
          <Col className="columna-card">
            <Card.Text>$ {precio}</Card.Text>
            <Button variant="secondary" onClick={verProducto}>
              {textButton}
            </Button>
          </Col>
          <Col className="columna-card-agregar">
            <AddToCartButton
              product={{ id, nombre, precio }}
              addToCart={addToCart}
              removerItem={removerItem}
              getQuantityById={getQuantityById}
              quantity={quantity}
            />
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
