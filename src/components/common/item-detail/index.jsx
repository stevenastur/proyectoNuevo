import { Card } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  return (
    <div className="tarjetaGrande">
      <Card key={product.id} className="tarjeta">
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text> {product.descripción}</Card.Text>
          <Card.Text>$ {product.precio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export { ItemDetail };
