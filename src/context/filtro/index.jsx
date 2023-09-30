import { createContext, useEffect, useState } from "react";

const FilterContext = createContext([]);

const FiltroProvider = ({ children }) => {
    const [filters, setFilters] = useState({category:'Todos'})

      const loadFilterFromLocalStorage = () => {
        const storedFilter = localStorage.getItem("filters");
        if (storedFilter) {
          setFilters(JSON.parse(storedFilter));
        }
      };
    
      useEffect(() => {
        loadFilterFromLocalStorage();
      }, []);
      
      useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.setItem("filters", JSON.stringify(filters));
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, [filters]);

      
  return (
    <FilterContext.Provider value={{filters, setFilters}}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FiltroProvider };
