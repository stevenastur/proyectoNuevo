import { useContext, useEffect, useId, useState } from "react";
import { useFilters } from "../hook/filtro";
import { Button, Dropdown, Nav } from "react-bootstrap";
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
    <div className="filtroPadre">
      <Button
        variant={selectedCategory === 'Todos' ? 'dark' : 'rest'}
        className="nombre-filtro"
        onClick={() => handleChangeCategory('Todos')}
      >
        Todos
      </Button>
      <Button
        variant={selectedCategory === 'Pan lactal' ? 'dark' : 'rest'}
        className="nombre-filtro"
        onClick={() => handleChangeCategory('Pan lactal')}
      >
        Pan lactal
      </Button>
      <Button
        variant={selectedCategory === 'Pan sanguche' ? 'dark' : 'rest'}
        className="nombre-filtro"
        onClick={() => handleChangeCategory('Pan sanguche')}
      >
        Pan sanguche
      </Button>
      <Button
        variant={selectedCategory === 'Pan artesano' ? 'dark' : 'rest'}
        className="nombre-filtro"
        onClick={() => handleChangeCategory('Pan artesano')}
      >
        Pan artesano
      </Button>
      <Button
        variant={selectedCategory === 'Pizza' ? 'dark' : 'outline-primary'}
        className="nombre-filtro"
        onClick={() => handleChangeCategory('Pizza')}
      >
        Pizza
      </Button>
    </div>
  );
};

export { FiltroProductos };
