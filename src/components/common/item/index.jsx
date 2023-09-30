import { Card, Button, Col, Image } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import "./style.scss";
import { AddToCartButton } from "../boton/add-to-card";
import campo from "../../../assets/campo.jpg";
import ciabatta from "../../../assets/ciabatta.jpg";
import burga from "../../../assets/burga.jpg";
import pizzaCebolla from "../../../assets/pizzaCebolla.jpg";
import lactal from "../../../assets/lactal.jpg";
import lactalArtesano from "../../../assets/lactalArtesano.jpg";

const Item = ({ id, nombre, precio, verProducto, textButton }) => {
  const { addToCart, cart, removerItem, getQuantityById } = useCart();

  const checkProdInCart = (prod) => {
    return cart.some((item) => item.id === prod.id);
  };

  const quantity = getQuantityById(id);

  const productImages = {
    campo: {campo},
    ciabatta: {ciabatta},
    burga: {burga},
    pizzaCebolla: {pizzaCebolla},
    lactal: {lactal},
    lactalArtesano: lactalArtesano,
  }

  return (
    <>
      <Card key={id} className="tarjeta-individual">
        <Card.Body className="columna-card">
          <Col className="imagen">
            <Image src={productImages[nombre]} rounded />
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
