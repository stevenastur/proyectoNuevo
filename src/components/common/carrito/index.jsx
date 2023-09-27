import { useContext, useId, useState } from "react";
import "./style.scss";
import { CartContext } from "../../../context/carrito";
import { Button, Modal } from "react-bootstrap";

const CarritoCompras = () => {
  const carritoId = useId();

  const { cart, setCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const quantity = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0;
  const totalPrecio = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0)
    : 0;

  const finalizarCompra = () => {
    setCart([]);
    setShowModal(true);

    console.log(cart);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <label htmlFor={carritoId} className="cart-button">
        Carrito de Compras
      </label>
      <input id={carritoId} type="checkbox" hidden />


      <aside className="cart">
        <ul>
          <li>

            <Modal show={showModal} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Compra exitosa!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Muchas gracias por su compra, vuelva pronto!</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={closeModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            {cart.length === 0 ? (
              <p className="letra">El carrito está vacío.</p>
            ) : (
              <>
                <Button onClick={finalizarCompra}>Finalizar compra</Button>
                <div className="general">
                  <div className="letra">Items en el carrito: {quantity}</div>
                  <div className="letra">Total: ${totalPrecio}</div>
                  <span className="letra">.</span>
                  <div>
                    {cart &&
                      cart.map((item) => (
                        <div key={item.id}>
                          <span className="letra">
                            {item.quantity}-
                            {item.nombre}-{item.marca}
                          </span>{" "}
                          - <span className="letra">${item.precio}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </li>
        </ul>
      </aside>

    </>
  );
};

export { CarritoCompras };
