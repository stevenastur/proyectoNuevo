import { Dropdown } from "react-bootstrap";
import { useFilters } from "../hook";


const FiltroProductos = () => {
  const { setFilters } = useFilters();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filtrar
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Pan lactal</Dropdown.Item>
        <Dropdown.Item>Pan artesano</Dropdown.Item>
        <Dropdown.Item>Pizza</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
};

export { FiltroProductos };