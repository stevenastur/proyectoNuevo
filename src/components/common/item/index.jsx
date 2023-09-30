import { Card, Button, Col, Image } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";
import { AddToCartButton } from "../boton/add-to-card";

const Item = ({ id, nombre, precio, verProducto, textButton, img }) => {
  const { addToCart, cart, removerItem, getQuantityById } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  const quantity = getQuantityById(id);

  console.log(img)


  return (
    <>
      <Card key={id} className="tarjeta-individual">
        <Card.Body className="columna-card">
          <Col className="imagen">
          <Card.Img variant="top" src={img}/>
          </Col>
          <Col className="columna-card-agregar">
            <Card.Title>{nombre}</Card.Title>
            <AddToCartButton
              product={{ id, nombre, precio }}
              addToCart={addToCart}
              removerItem={removerItem}
              getQuantityById={getQuantityById}
              quantity={quantity}
            />
          </Col>
          <Col className="columna-card-agregar">
            <Card.Text className="precio">$ {precio}</Card.Text>
            <Button variant="secondary" onClick={verProducto} className="boton-ver">
              {textButton}
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
