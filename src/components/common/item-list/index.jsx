import { Col, Row } from "react-bootstrap";
import { Item } from "../item";
import "./style.scss";

const ItemList = ({ items }) => {
  return (
    <div className="tarjetaGrandeList">
      {items.map((item) => (
        <Col key={item.id} className="tarjetaList">
          <Item {...item} />
        </Col>
      ))}
    </div>
  );
};

export { ItemList };
