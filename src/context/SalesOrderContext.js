// dataContext.js

import { createContext, useContext, useState } from "react";

const SalesOrderContext = createContext();

export function SalesOrderProvider({ children }) {
  const [salesOrder, setSalesOrder] = useState();

  return (
    <SalesOrderContext.Provider value={{ salesOrder, setSalesOrder }}>
      {children}
    </SalesOrderContext.Provider>
  );
}

export function useSalesOrderContext() {
  return useContext(SalesOrderContext);
}
