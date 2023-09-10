import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export function RoleContextProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role"));

  const updateRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, updateRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRoleContext() {
  return useContext(RoleContext);
}
