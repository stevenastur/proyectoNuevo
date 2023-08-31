import { Button, Card } from "react-bootstrap";
import { useCart } from "../hook/carrito";

const ItemDetail = ({ product, prod }) => {
  const { addToCart, cart } = useCart();

  console.log(cart);

  return (
    <div className="tarjetaGrande">
      <Card key={product.id} className="tarjeta">
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text> {product.descripción}</Card.Text>
          <Card.Text>$ {product.precio}</Card.Text>
          <Button onClick={() => addToCart(prod)}>Agregar+</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export { ItemDetail };
