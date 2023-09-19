import { Button, Card } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const { addToCart, removerItem, quantityPerItem } = useCart();
  const [quantity, setQuantity] = useState(0);


  const onAdd = (value) => {
    setQuantity(value);
    addToCart(product);
  };

  const onLess = (value) => {
    setQuantity(value);
    removerItem(product);
  };

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
