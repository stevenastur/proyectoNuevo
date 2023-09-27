import { Button, Card } from "react-bootstrap";
import { useCart } from "../hook/carrito";

const ItemDetail = ({ product }) => {
  const { addToCart, removerItem, getQuantityById } = useCart();

  const onAdd = () => {
    addToCart(product);
  };

  const onLess = () => {
    removerItem(product);
  };

  const quantity = getQuantityById(product.id);

  return (
    <div className="tarjetaGrande">
      <Card key={product.id} className="tarjeta">
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text> {product.descripción}</Card.Text>
          <Card.Text>$ {product.precio}</Card.Text>

          {quantity === 0 ? (
            <Button variant="secondary" onClick={() => onAdd(1)}>Agregar al Carrito</Button>
          ) : (
            <>
              <Button variant="secondary" onClick={() => onLess(quantity - 1)}>-</Button>
              {quantity}
              <Button variant="secondary" onClick={() => onAdd(quantity + 1)}>+</Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export { ItemDetail };
