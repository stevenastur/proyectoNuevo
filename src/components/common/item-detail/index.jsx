import { Button, Card } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import { AddToCartButton } from "../boton/add-to-card";

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
        <Card.Img variant="top" src={product.img} />
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text> {product.descripción}</Card.Text>
          <Card.Text>$ {product.precio}</Card.Text>

          <AddToCartButton
            product={product}
            addToCart={addToCart}
            removerItem={removerItem}
            getQuantityById={getQuantityById}
            quantity={quantity}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export { ItemDetail };
