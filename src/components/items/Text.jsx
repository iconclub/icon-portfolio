import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Text = ({ size, customStyle, data }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    fontSize: data.fontSize,
    fontStyle: data.fontStyle,
    fontWeight: data.fontWeight,
    color: data.color,
    backgroundColor: data.backgroundColor,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
  };

  return <p style={{ ...style, ...customStyle }}>{data.text}</p>;
};
