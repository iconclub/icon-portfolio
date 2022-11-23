import React, { memo } from "react";

import { CELL_WIDTH, CELL_HEIGHT } from "../../constants";

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
  const width = CELL_WIDTH * size[1];
  const height = CELL_HEIGHT * size[0];

  const style = {
    backgroundColor: getBackgroundType(type),
    width,
    height,
    position: "absolute",
    top: row * CELL_HEIGHT,
    left: col * CELL_WIDTH,
    zIndex: -1,
  };

  return <div type={type} style={style} />;
};

export const Overlay = memo(_Overlay);
