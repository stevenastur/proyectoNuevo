import { useId } from "react";
import { useFilters } from "../hook/filtro";

const FiltroProductos = () => {
  const { setFilters } = useFilters();
  const categoryFilterId = useId();

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <div>
      <label htmlFor={categoryFilterId}>Categoría: </label>
      <select id={categoryFilterId} onChange={handleChangeCategory}>
        <option value="all">Todos</option>
        <option value="Pan lactal">Pan lactal</option>
        <option value="Pan sanguche">Pan sanguche</option>
        <option value="Pan artesano">Pan artesano</option>
        <option value="Pizza">Pizza</option>
      </select>
    </div>
  );
};

export { FiltroProductos };
