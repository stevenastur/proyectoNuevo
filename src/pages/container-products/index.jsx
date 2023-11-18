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

  const [showModalProd, setshowModalProd] = useState(false);

  const handleClose = () => setshowModalProd(false);
  const handleShow = () => setshowModalProd(true);

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
    console.log(prods);
    setProducto(prods);
    setshowModalProd(true);
  };

  const filtrado = filterProducts(prods);

  const product = filtrado.length > 0 ? filtrado[0] : null;

  return (
    <>
    {prods.map((prod) => (
      <Modal key={prod.id} show={showModalProd} onHide={handleClose}>
        <Modal.Header handleClose>
          <Modal.Title>{prod.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>$ {prod.precio}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>))}

      <Container fluid className="mapa">
        <div className="menu">
          <h1 className="titulo">Nuestro Menú</h1>
          {/* <FiltroProductos /> */}
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
                // verDetalleProducto={abrirPop}
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export { ContainerProducts };
