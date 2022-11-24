import React, { useMemo, useState } from "react";

import { CELL_HEIGHT, CELL_WIDTH, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../constants";
import { PropertyContext } from "./PropertyContext";

export const PropertyProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [showingItem, setShowingItem] = useState(null);
  const [layout, setLayout] = useState({
    numberOfRows: NUMBER_OF_ROWS,
    numberOfColumns: NUMBER_OF_COLUMNS,
    cellWidth: CELL_WIDTH,
    cellHeight: CELL_HEIGHT,
  });

  const value = useMemo(
    () => ({
      isShowing,
      setIsShowing,
      showingItem,
      setShowingItem,
      layout,
      setLayout,
    }),
    [isShowing, showingItem, layout]
  );

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
};
