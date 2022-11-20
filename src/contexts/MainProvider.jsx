import React, { useMemo, useState } from "react";

import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([]);

  const value = useMemo(
    () => ({
      items,
      setItems,
      selectedItem,
      setSelectedItem,
    }),
    [items, selectedItem]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
