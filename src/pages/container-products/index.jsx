import { Col, Row, Container, Spinner } from "react-bootstrap";
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

  const [cargando, setCargando] = useState(true);

  const { addToCart, removerItem, getQuantityById } = useCart();

  useEffect(() => {
    getProds(nombreFiltrado)
      .then((data) => {
        setProds(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar datos:", error);
        setCargando(false); // En caso de error, asegúrate de que isLoading sea false
      });
  }, [nombreFiltrado]);

  const filtrado = filterProducts(prods);

  const product = filtrado.length > 0 ? filtrado[0] : null;

  return (
    <div className="mapa">
      <div className="blancoUno"></div>
      <div className="blancoUnoBajo"></div>
      <div className="menu">
        <h1 className="titulo">Nuestro Menú</h1>
        <FiltroProductos />
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
          )}
        </div>
      </div>
      <div className="blancoDosBajo"></div>
      <div className="blancoDos"></div>
    </div>
  );
};

export { ContainerProducts };
