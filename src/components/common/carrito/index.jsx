import { useContext, useEffect, useId, useState } from "react";
import "./style.scss";
import { CartContext } from "../../../context/carrito";
import { Button, Card, Modal, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AddToCartButton } from "../boton/add-to-card";

const CarritoCompras = () => {
  const carritoId = useId();

  const { cart, setCart, getQuantityById, addToCart, removerItem } =
    useContext(CartContext);

  const [montoTotal, setMontoTotal] = useState(0);

  const [showModalVacio, setShowModalVacio] = useState(false);
  const [showVacio, setShowVacio] = useState(false);

  const handleCloseVacio = () => setShowVacio(false);
  const handleShowVacio = () => setShowVacio(true);

  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [primerProductoAgregado, setPrimerProductoAgregado] = useState(false);

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



  useEffect(() => {
    if (quantity === 1 && !primerProductoAgregado) {
      setShow(true); 
      setPrimerProductoAgregado(true)
    }
  }, [cart]);


  const finalizarCompra = () => {
    if (!cart || cart.length == 0) {
      setShowModalVacio(true);
    } else {
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

      const pedidoWhatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;

      window.open(pedidoWhatsappLink, "_blank");

      setCart([]);

      const total = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio,
        0
      );
      setMontoTotal(total);

      setShowModal(true);
    }
  };
  const closeModalVacio = () => {
    setShowModalVacio(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const renderCartItem = (item) => {
    return (
      <Card key={item.id} className="mb-2">
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>Cantidad: {item.quantity}</Card.Text>
          <Card.Text>Precio: ${item.precio}</Card.Text>
          <div className="cuerpoBotonCarrito">
            <AddToCartButton
              product={item}
              addToCart={addToCart}
              removerItem={removerItem}
              quantity={getQuantityById(item.id)}
            />
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <label htmlFor={carritoId} className="cart-button" onClick={handleShow}>
        <FontAwesomeIcon icon={faShoppingCart} className="iconoCarrito" />
      </label>
      <input id={carritoId} type="checkbox" hidden />

      <aside className="carrito">
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

        <Modal show={showModalVacio} onHide={closeModalVacio}>
          <Modal.Header closeButton>
            <Modal.Title>No se puede comprar con el carrito vacio!</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModalVacio}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <>
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="menuCarrito"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Tu pedido ({quantity}) </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="cuerpoCarrito">
              <div className="general">
                <div>
                  <div className="botones">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inciarCompraBoton"
                    >
                      <Button
                        variant="outline-dark"
                        onClick={finalizarCompra}
                        className="botonComprar"
                      >
                        Iniciar compra
                      </Button>
                    </a>
                    <Button
                      variant="outline-dark"
                      className="botonLimpiar"
                      onClick={limpiarCarrito}
                    >
                      Limpiar
                    </Button>
                  </div>
                  {cart && cart.length === 0 ? (
                    <Card>
                      <p className="letra">El carrito está vacío.</p>
                    </Card>
                  ) : (
                    cart.map((item) => renderCartItem(item))
                  )}
                </div>
              </div>
              <div className="carroFooter">
                <div className="letra">Total estimado</div>
                <div>${totalPrecio}</div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </aside>
    </>
  );
};

export { CarritoCompras };
