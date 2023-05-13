import { createContext } from "react";

interface LayoutContextValue {
    isGridLayout: boolean;
    setIsGridLayout: (isGridLayout: boolean) => void;
  }
  
 export const LayoutContext = createContext<LayoutContextValue>({
    isGridLayout: true,
    setIsGridLayout: () => {},
  });