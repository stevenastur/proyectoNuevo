import { Card, Button } from "react-bootstrap";
import { useCart } from "../hook/carrito";

const Item = ({ id, nombre, descripción, precio, verProducto, textButton }) => {
  const { addToCart, cart } = useCart();

  console.log(cart);

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

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
          <Button onClick={() => addToCart(product)}>Agregar+</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
