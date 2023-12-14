import { Col, Row, Container, Spinner, Modal, Button } from "react-bootstrap";
import { getProds } from "../../firestore/productos";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../../components/common/item-list";
import { FiltroProductos } from "../../components/common/filtro";
import { useFilters } from "../../components/common/hook/filtro";
import "./style.scss";
import { useCart } from "../../components/common/hook/carrito";
import { AddToCartButton } from "../../components/common/boton/add-to-card";

const ContainerProducts = () => {
  const { nombreFiltrado } = useParams();
  const navigate = useNavigate();

  const { filters, filterProducts } = useFilters();

  const [producto, setProducto] = useState({});

  const [prods, setProds] = useState([]);

  const [cargando, setCargando] = useState(true);

  const { addToCart, removerItem, getQuantityById } = useCart();

  const [showModalProd, setShowModalProd] = useState({});

  const handleClose = () => setShowModalProd({ ...showModalProd, [prod.id]: false });
  const handleShow = () => setShowModalProd({ ...showModalProd, [prod.id]: true });

  useEffect(() => {
    getProds(nombreFiltrado)
      .then((data) => {
        setProds(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar datos:", error);
        setCargando(false);
      });
  }, [nombreFiltrado]);

  const abrirPop = (prods) => {
    setProducto(prods);
    setShowModalProd(true);
  };

  const filtrado = filterProducts(prods);

  const product = filtrado.length > 0 ? filtrado[0] : null;

  return (
    <>
      {prods.map((prod) => (
        <Modal className="modalDetalleProducto" key={prod.id} show={showModalProd[prod.id] || false}
        onHide={handleClose}>
          <Modal.Header handleClose>
            <Modal.Title>
              <h1>{prod.nombre}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{prod.descripción}</p>
            <p>$ {prod.precio}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      ))}

      <Container fluid className="mapa">
        <div className="menu">
          <h1 className="titulo">Nuestro Menú</h1>
        </div>
        <div className="color-fondo-contenedor">
          <div>
            {cargando ? (
              <div className="cargando">
                <Spinner animation="border" />
              </div>
            ) : (
              <ItemList
                items={filtrado.map((prod) => ({
                  ...prod,
                  verProducto: () => abrirPop(prods),
                  textButton: "Ver",
                  AddToCartButton: (
                    <AddToCartButton
                      product={prod}
                      addToCart={addToCart}
                      removerItem={removerItem}
                      getQuantityById={getQuantityById}
                    />
                  ),
                }))}
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export { ContainerProducts };
