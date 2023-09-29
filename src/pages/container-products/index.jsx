import { Col, Container } from "react-bootstrap";
import { getProds } from "../../firestore/productos";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../../components/common/item-list";
import { FiltroProductos } from "../../components/common/filtro";
import { useFilters } from "../../components/common/hook/filtro";

const ContainerProducts = () => {
  const { nombreFiltrado } = useParams();
  const navigate = useNavigate();

  const { filters, filterProducts } = useFilters();

  const [prods, setProds] = useState([]);

  useEffect(() => {
    getProds(nombreFiltrado).then((data) => {
      setProds(data);
    });
  }, [nombreFiltrado]);

  const filtrado = filterProducts(prods);

  return (
    <>
      <Container className="bg-black">
        <Col>
          <FiltroProductos />
        </Col>
        <Col>
          <ItemList
            items={filtrado.map((prod) => ({
              ...prod,
              verProducto: () => navigate(`/item-detail/${prod.id}`),
              textButton: "Ver",
            }))}
          />
        </Col>
      </Container>
    </>
  );
};

export { ContainerProducts };
