import { Container } from "react-bootstrap";
import { getProds } from "../../firestore/productos";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../../components/common/item-list";

const ContainerProducts = () => {
  const { nombreFiltrado } = useParams();
  const navigate = useNavigate();

  const [prods, setProds] = useState([]);

  useEffect(() => {
    getProds(nombreFiltrado).then((data) => {
      setProds(data);
    });
  }, [nombreFiltrado]);

  return (
    <>
      <Container>
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
