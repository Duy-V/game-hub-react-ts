import React, { createContext, useState, ReactNode } from "react";
import { LayoutContext } from "./LayoutContext";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <LayoutContext.Provider value={{ isGridLayout, setIsGridLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
