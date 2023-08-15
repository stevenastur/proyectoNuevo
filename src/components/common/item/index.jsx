import { Card, Button } from "react-bootstrap";

const Item = ({ id, nombre, descripcion, precio, verProducto, textButton }) => {
  return (
    <>
      <Card key={id}>
        {/* <Card.Img variant="top" src={img} /> */}
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text> {descripcion}</Card.Text>
          <Card.Text>$ {precio}</Card.Text>

          <Button variant="secondary" onClick={verProducto}>
            {textButton}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
