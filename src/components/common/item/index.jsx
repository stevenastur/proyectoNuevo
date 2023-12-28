import { Card, Button, Col, Image, Row } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";
import { AddToCartButton } from "../boton/add-to-card";
import clasico from "../../../assets/chipaClasico.jpg";

const Item = ({
  id,
  nombre,
  precio,
  verProducto,
  textButton,
  img,
  descripción,
}) => {
  const { addToCart, cart, removerItem, getQuantityById } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  const quantity = getQuantityById(id);

  return (
    <>
      <Card key={id} className="tarjeta-individual">
        <Card.Body className="columna-card">
          <Row className="imagen">
            <Card.Img variant="top" src={clasico} alt="171x180" />
          </Row>
          <Row className="columna-card-agregar">
            <div className="titulo-prod">
              <Card.Title>{nombre}</Card.Title>
            </div>
            <div className="descripcion-prod">
              <Card.Text>{descripción}</Card.Text>
            </div>
            <div className="precio-agregar">
              <div className="cuerpoPrecio">
                <div className="linea-docena">
                  <Card.Text className="precio">Docena</Card.Text>
                  <Card.Text className="precio">Media Docena</Card.Text>
                </div>
                <div className="linea-media-docena">
                  <Card.Text className="precio">$ {precio}</Card.Text>
                  <Card.Text className="precio">$ {precio}</Card.Text>
                </div>
              </div>
              <div className="cuerpoBoton">
                <AddToCartButton
                  product={{ id, nombre, precio }}
                  addToCart={addToCart}
                  removerItem={removerItem}
                  getQuantityById={getQuantityById}
                  quantity={quantity}
                  className="addtoCartItems"
                />
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export { Item };
