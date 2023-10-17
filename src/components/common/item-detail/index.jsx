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
              <h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam corrupti optio architecto culpa maiores assumenda
                dolore, dolores accusantium quam, sed error. Ratione debitis
                laudantium maiores quod nobis unde provident fugit!
              </h3>
            </Card.Text>
            <div className="prevBoton">
              <Card.Text>
                <div><h3>$ {product.precio}</h3></div>
              </Card.Text>
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
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { ItemDetail };
