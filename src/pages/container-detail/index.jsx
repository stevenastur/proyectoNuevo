import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProd } from "../../firestore/productos";
import { ItemDetail } from "../../components/common/item-detail";
import "./style.scss";
import { Spinner } from "react-bootstrap";

const ContainerDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProd(id)
      .then((data) => {
        setProduct(data);
        setCargando(false);
      })
      .catch((error) => {
        console.log(error);
        setCargando(false);
      });
  }, [id]);

  return (
    <>
      {cargando ? (
        <div className="cargando">
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export { ContainerDetail };
