import { Card, Container } from "react-bootstrap";
import { useCart } from "../hook/carrito";
import { AddToCartButton } from "../boton/add-to-card";
import "./style.scss";

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
    <Container className="tarjetaGrandeDetail">
      <Card key={product.id} className="cardcita">
        <Card.Body className="tarjetaDetail">
          <div className="imagenTarjeta">
            <Card.Img
              variant="top"
              src={product.img}
              className="imagenDetail"
            />
          </div>
          <div className="InfoTarjeta">
            <Card.Title>
              <h1>{product.nombre}</h1>
            </Card.Title>
            <Card.Text>
              <h2>$ {product.precio}</h2>
            </Card.Text>
            <div className="prevBoton">
              <div className="botonAgg">
                <AddToCartButton
                  product={product}
                  addToCart={addToCart}
                  removerItem={removerItem}
                  getQuantityById={getQuantityById}
                  quantity={quantity}
                />
              </div>
            </div>
            <Card.Text>
              <h3> {product.descripción} </h3>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { ItemDetail };
