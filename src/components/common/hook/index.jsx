import { useContext } from "react";
import { FilterContext } from "../../../context/filtro";

function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);

  const filterProducts = (prods) => {
    return prods.filter((prod) => {
      return filters.category === "all" || prod.category === filters.category;
    });
  };

return { filters, setFilters, filterProducts }
}

export { useFilters }