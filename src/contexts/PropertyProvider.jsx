import React, { useMemo, useState } from "react";

import { PropertyContext } from "./PropertyContext";

export const PropertyProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [showingItem, setShowingItem] = useState(null);

  const value = useMemo(
    () => ({
      isShowing,
      setIsShowing,
      showingItem,
      setShowingItem,
    }),
    [isShowing, showingItem]
  );

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
};
