import { Card, Button, Col, Image, Row } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";
import { AddToCartButton } from "../boton/add-to-card";

const Item = ({ id, nombre, precio, verProducto, textButton, img }) => {
  const { addToCart, cart, removerItem, getQuantityById } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  const quantity = getQuantityById(id);

  console.log(img);

  return (
    <>
      <Card key={id} className="tarjeta-individual">
        <Card.Body className="columna-card">
          <Col className="imagen" sm={4} onClick={verProducto}>
            <Card.Img variant="top" src={img} alt="171x180" />
          </Col>
          <Col className="columna-card-agregar" sm={8}>
            <div className="titulo-prod" onClick={verProducto}>
              <Card.Title>{nombre}</Card.Title>
            </div>
            <div className="precio-agregar">
              <div>
                <AddToCartButton
                  product={{ id, nombre, precio }}
                  addToCart={addToCart}
                  removerItem={removerItem}
                  getQuantityById={getQuantityById}
                  quantity={quantity}
                  onClick={verProducto}
                  className= "addtoCart"
                />
              </div>
              <div>
                <Card.Text className="precio" onClick={verProducto}>$ {precio}</Card.Text>
              </div>
            </div>
          </Col>
          {/* <Row>
              <Button
                variant="secondary"
                onClick={verProducto}
                className="boton-ver"
              >
                {textButton}
              </Button>
            </Row> */}
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
