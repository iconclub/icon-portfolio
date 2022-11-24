import React, { memo } from "react";

import { usePropertyContext } from "../../contexts/PropertyContext";

export const overlayTypes = {
  Allowed: "ALLOWED",
  Denied: "DENIED",
};

const getBackgroundType = (type) => {
  switch (type) {
    case overlayTypes.Allowed:
      return "#5cb85c";
    case overlayTypes.Denied:
      return "#ff4444";
    default:
      return "transparent";
  }
};

const _Overlay = ({ type, size, row, col }) => {
  const { layout } = usePropertyContext();

  const style = {
    width: layout.cellWidth * size[1],
    height: layout.cellHeight * size[0],
    backgroundColor: getBackgroundType(type),
    position: "absolute",
    top: row * layout.cellHeight,
    left: col * layout.cellWidth,
    zIndex: -1,
  };

  return <div type={type} style={style} />;
};

export const Overlay = memo(_Overlay);
