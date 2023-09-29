import { Col, Row } from "react-bootstrap";
import { Item } from "../item";
import "./style.scss";

const ItemList = ({ items }) => {
  return (
    <div className="tarjetaGrande">
      {items.map((item) => (
        <Col key={item.id} className="tarjeta">
          <Item {...item} />
        </Col>
      ))}
    </div>
  );
};

export { ItemList };
