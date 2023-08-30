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
  
  const filtrado = filterProducts(prods);


  useEffect(() => {
    getProds(nombreFiltrado).then((data) => {
      setProds(data);
    });
  }, [nombreFiltrado]);

  return (
    <>
      <Container>
        <FiltroProductos />
        <ItemList
          items={prods.map((prod) => ({
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
