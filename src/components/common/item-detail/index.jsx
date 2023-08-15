import { Card } from "react-bootstrap";


const ItemDetail = ({ product }) => {


  return (
    <div className="tarjetaGrande">
      <Card key={product.id} className="tarjeta">
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>Bodega: {product.bodega}</Card.Title>
          <Card.Text>Marca: {product.marca}</Card.Text>
          <Card.Text>Cepa: {product.cepa}</Card.Text>
          <Card.Text>$ {product.precio}</Card.Text>
          <Card.Text>Año: {product.año}</Card.Text>
          <Card.Text>Corte: {product.corte}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export { ItemDetail };