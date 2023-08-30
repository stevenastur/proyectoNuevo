import { Container } from "react-bootstrap";
import { getProds } from "../../firestore/productos";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../../components/common/item-list";
import { useFilters } from "../../components/common/hook";
import { FiltroProductos } from "../../components/common/filtro";

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
  
  const filtrado = filterProducts(prods)

  return (
    <>
      <Container>
        <FiltroProductos />
        <ItemList
          items={filtrado.map((prod) => ({
            ...prod,
            verProducto: () => navigate(`/item-detail/${prod.id}`),
            textButton: "Ver producto",
          }))}
        />
      </Container>
    </>
  );
};

export { ContainerProducts };
