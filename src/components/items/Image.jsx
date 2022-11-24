import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Image = ({ size, customStyle, data }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    objectFit: "cover",
    borderRadius: data.borderRadius,
  };

  return <img src={data.source} alt={"hello world"} style={{ ...style, ...customStyle }} />;
};
