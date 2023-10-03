import { Col, Container } from "react-bootstrap";
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

  const [prods, setProds] = useState([]);

  const { addToCart, removerItem, getQuantityById } = useCart();

  useEffect(() => {
    getProds(nombreFiltrado).then((data) => {
      setProds(data);
    });
  }, [nombreFiltrado]);

  const filtrado = filterProducts(prods);

  const product = filtrado.length > 0 ? filtrado[0] : null;

  return (
    <>
      <Container className="color-fondo">
        <h1 className="titulo">Nuestro Menú</h1>
        <Col>
          <FiltroProductos />
        </Col>
        <Col>
          <ItemList
            items={filtrado.map((prod) => ({
              ...prod,
              verProducto: () => navigate(`/item-detail/${prod.id}`),
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
        </Col>
      </Container>
    </>
  );
};

export { ContainerProducts };
