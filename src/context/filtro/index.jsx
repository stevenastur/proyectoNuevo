import { createContext, useState } from "react";

const FilterContext = createContext([]);

const FiltroProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category:'all'
      })
  return (
    <FilterContext.Provider value={{filters, setFilters}}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FiltroProvider };
