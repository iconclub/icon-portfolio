import React, { memo } from "react";

import { cellWidth, cellHeight } from "../../constants";

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
      return "#fff";
  }
};

const _Overlay = ({ type, size, row, col }) => {
  const width = cellWidth * size[1];
  const height = cellHeight * size[0];

  const style = {
    backgroundColor: getBackgroundType(type),
    width,
    height,
    position: "absolute",
    top: row * cellHeight,
    left: col * cellWidth,
    zIndex: -1,
  };

  return <div type={type} style={style} />;
};

export const Overlay = memo(_Overlay);
