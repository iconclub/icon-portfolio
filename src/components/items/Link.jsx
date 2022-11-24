import React from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const Link = ({ size, customStyle, data }) => {
  const { layout } = usePropertyContext();

  const style = {
    display: "block",
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    fontSize: data.fontSize,
    fontStyle: data.fontStyle,
    fontWeight: data.fontWeight,
    color: data.color,
    backgroundColor: data.backgroundColor,
    textDecoration: data.textDecoration,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <a
      type="text"
      style={{ ...style, ...customStyle }}
      href={data.link}
      target="_blank"
      rel="noreferrer"
    >
      {data.text}
    </a>
  );
};
