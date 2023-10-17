import { useContext, useEffect, useId, useState } from "react";
import { useFilters } from "../hook/filtro";
import { Dropdown, Nav } from "react-bootstrap";
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
      <Nav
        className="catFiltro"
        justify
        variant="tabs"
        defaultActiveKey="/home"
        onSelect={handleChangeCategory}
      >
        <Nav.Item>
          <Nav.Link
            eventKey="Todos"
            className={selectedCategory === "Todos" ? "active-link" : "rest"}>
            Todos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Pan lactal" className={selectedCategory === "Pan lactal" ? "active-link" : "rest"}>Pan lactal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Pan sanguche" className={selectedCategory === "Pan sanguche" ? "active-link" : "rest"}>Pan sanguche</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Pan artesano" className={selectedCategory === "Pan artesano" ? "active-link" : "rest"}>Pan artesano</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Pizza" className={selectedCategory === "Pizza" ? "active-link" : "rest"}>Pizza</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export { FiltroProductos };
