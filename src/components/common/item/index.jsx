import { Card, Button, Row, Col } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";

const Item = ({ id, nombre, precio, verProducto, textButton }) => {
  const { addToCart, cart } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

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
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
