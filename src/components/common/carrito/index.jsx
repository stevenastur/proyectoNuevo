import { useContext, useId, useState } from "react";
import "./style.scss";
import { CartContext } from "../../../context/carrito";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CarritoCompras = () => {
  const carritoId = useId();

  const { cart, setCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [montoTotal, setMontoTotal] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const quantity = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity, 0)
    : 0;
  const totalPrecio = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.precio, 0)
    : 0;

  const phoneNumber = "54 11 56533910";
  const message = "¡Hola! Mi pedido es el siguiente..";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  const finalizarCompra = () => {
    const montoTotal = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.precio,
      0
    );

    const pedido = cart.map((item) => {
      return `${item.nombre} (${item.quantity} unidades) - monto: $${
        item.quantity * item.precio
      }`;
    });

    const pedidoTexto = pedido.join("\n");

    const pedidoMessage = `¡Hola! Mi pedido es el siguiente:\n${pedidoTexto} \n\nMonto total del pedido: $${montoTotal}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      pedidoMessage
    )}`;

    window.open(whatsappLink, "_blank");

    setCart([]);

    const total = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.precio,
      0
    );
    setMontoTotal(total);

    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <label htmlFor={carritoId} className="cart-button" onClick={handleShow}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#700d14" }} />
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
            <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Tu pedido ({quantity}) </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="general">
                    <div>
                      {cart && cart.length === 0 ? (
                        <p className="letra">El carrito está vacío.</p>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id}>
                            <span>
                              {item.nombre} {item.marca}
                            </span>
                            <span className="letra">{item.quantity}</span>
                            <span className="letra"> ${item.precio}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="letra">Total estimado</div>
                  <div>${totalPrecio}</div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button onClick={finalizarCompra}>Iniciar compra</Button>
                  </a>
                </Modal.Footer>
              </Modal>
            </>
          </li>
        </ul>
      </aside>
    </>
  );
};

export { CarritoCompras };
