import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Divider = ({ size, customStyle, data }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: data.thick,
    backgroundColor: data.color,
  };

  return <div style={{ ...style, ...customStyle }} />;
};
