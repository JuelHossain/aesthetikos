import { createContext, useContext } from "react";
import useProductForm from "./useProductForm";

export const productFormContext = createContext();
export function ProductFormProvider({ id, children }) {
  const value = useProductForm(id);
  return <productFormContext.Provider value={value}>{children}</productFormContext.Provider>;
}
export const useProductFormContext = () => useContext(productFormContext);
