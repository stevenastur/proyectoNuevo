import { Card, Button } from "react-bootstrap";
import { useCart } from "../hook/carrito";

const Item = ({ id, nombre, descripción, precio, verProducto, textButton }) => {
  const { addToCart } = useCart()

  return (
    <>
      <Card key={id}>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text> {descripción}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>

          <Button variant="secondary" onClick={verProducto}>
            {textButton}
          </Button>
          <Button onClick={() => addToCart(prod)}>
            Agregar+
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
