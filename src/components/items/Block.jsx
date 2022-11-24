import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Block = ({ size, customStyle, data }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    backgroundColor: data.backgroundColor,
  };

  return <div style={{ ...style, ...customStyle }} />;
};
