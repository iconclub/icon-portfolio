import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Image = ({ size, customStyle, data }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    objectFit: "cover",
  };

  return <img src={data.src} alt={"hello world"} style={{ ...style, ...customStyle }} />;
};
