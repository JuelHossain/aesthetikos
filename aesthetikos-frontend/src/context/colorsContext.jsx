import { createContext, useContext } from "react";
import { useColors } from "../utils/colors";

export const colorsContext = createContext();
export function ColorsProvider({ children, mode }) {
  const value = useColors(mode);
  return <colorsContext.Provider value={value}>{children}</colorsContext.Provider>;
}
export const useColorsContext = () => useContext(colorsContext);
