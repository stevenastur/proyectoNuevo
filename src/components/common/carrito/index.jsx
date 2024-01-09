import { useContext, useEffect, useId, useState } from "react";
import "./style.scss";
import { CartContext } from "../../../context/carrito";
import { Button, Card, Modal, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AddToCartButton } from "../boton/add-to-card";
import clasico from "../../../assets/chipaClasico.jpg";

const CarritoCompras = () => {
  const carritoId = useId();

  const {
    cart,
    setCart,
    getQuantityById,
    addToCart,
    removerItem,
    docenaQuantity,
    mediaDocenaQuantity,
    precioMediaDocena,
    precioDocena,
    quantityMediaDocena,
    quantityDocena,
    getPriceById,
  } = useContext(CartContext);

  const [montoTotal, setMontoTotal] = useState(0);
  const [montoPorProducto, setMontoPorProducto] = useState(0);

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



  const totalPrice = cart
    ? cart.reduce((acc, curr) => {
        const precioDocena = curr.quantity * curr.precioDocena || 0;
        const precioMediaDocena = curr.quantity * curr.precioMediaDocena || 0;

        return acc + precioDocena + precioMediaDocena;
      }, 0)
    : 0;

  // const totalPrecio = cart
  //   ? cart.reduce((acc, curr) => acc + curr.quantity * curr.precioSubtotal, 0)
  //   : 0;

  const phoneNumber = "54 11 56533910";
  const message = "¡Hola! Mi pedido es el siguiente..";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  useEffect(() => {
    if (quantity === 1 && !primerProductoAgregado) {
      setShow(true);
      setPrimerProductoAgregado(true);
    }
    if (quantity === 0) {
      setPrimerProductoAgregado(false);
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

      const pedidoTexto = cart
        .map(
          (item) =>
            `${item.nombre} (${item.quantity} unidades)       $${
              item.quantity * item.precio
            }`
        )
        .join("\n");

      const pedidoMessage = `¡Hola! Mi pedido es el siguiente:\n${pedidoTexto} \n\nMonto total: $${montoTotal}`;

      const pedidoWhatsappLink = `${whatsappLink}&text=${encodeURIComponent(
        pedidoMessage
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
    const uniqueKey = `${item.id}`;
    console.log(cart);

    return (
      <Card key={uniqueKey} className="mb-2">
        <Card.Body className="carritoProductos">
          <div className="imagenCarrito">
            <Card.Img variant="top" src={clasico} alt="171x180" />
          </div>
          <div className="datosCarrito">
            <Card.Title>{item.nombre}</Card.Title>
            <div className="tiposCarrito">
              <div className="tipoCarrito">
                <Card.Text>
                  Cantidad: {item.quantity}
                </Card.Text>
                <Card.Text>
                  Precio: ${getPriceById(item.id)}
                </Card.Text>
              </div>
            </div>
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
                <div>${totalPrice}</div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </aside>
    </>
  );
};

export { CarritoCompras };
