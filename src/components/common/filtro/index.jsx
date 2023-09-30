import { useContext, useEffect, useId, useState } from "react";
import { useFilters } from "../hook/filtro";
import { Dropdown } from "react-bootstrap";
import "./style.scss";
import { FilterContext } from "../../../context/filtro";

const FiltroProductos = () => {
  const { setFilters } = useFilters();
  const categoryFilterId = useId();
  const { filters } = useContext(FilterContext);
  const [selectedCategory, setSelectedCategory] = useState(filters.category);

  useEffect(() => {
    setSelectedCategory(filters.category);
  }, [filters.category]);

  const handleChangeCategory = (eventKey) => {
    setSelectedCategory(eventKey);
    setFilters((prevState) => ({
      ...prevState,
      category: eventKey,
    }));
  };



  return (
    <div>
      <Dropdown onSelect={handleChangeCategory}>
        <label htmlFor={categoryFilterId} className="categoria">Categoría: </label>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="todos">Todos</Dropdown.Item>
          <Dropdown.Item eventKey="Pan lactal">Pan lactal</Dropdown.Item>
          <Dropdown.Item eventKey="Pan sanguche">Pan sanguche</Dropdown.Item>
          <Dropdown.Item eventKey="Pan artesano">Pan artesano</Dropdown.Item>
          <Dropdown.Item eventKey="Pizza">Pizza</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
};

export { FiltroProductos };
