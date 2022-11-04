import React, { useMemo, useState } from "react";

import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [items, setItems] = useState([]);

  const value = useMemo(
    () => ({
      items,
      setItems,
      selectedItem,
      setSelectedItem,
      hoveredCell,
      setHoveredCell,
    }),
    [items, selectedItem, hoveredCell]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
