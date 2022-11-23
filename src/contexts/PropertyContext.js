import { createContext, useContext } from "react";

export const PropertyContext = createContext();

export const usePropertyContext = () => {
  return useContext(PropertyContext);
};
